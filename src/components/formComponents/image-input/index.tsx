'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import formatLink from '@/functions/formatLink';
import styles from './styles.module.css';
import Image from 'next/image';

interface ImageInputProps {
  label: string;
  name: string;
  accept?: string;
  required?: boolean;
  error?: string;
  width?: string;
  height?: string;
  initialValue?: string;
}

export const ImageInput = ({
  label,
  name,
  accept = 'image/*',
  required = false,
  error,
  width = '100%',
  height = '140px',
  initialValue,
}: ImageInputProps) => {
  const [preview, setPreview] = React.useState<string | null>(null);
  const { register, setValue } = useFormContext();
  const { onChange: registerOnChange, ...registerRest } = register(name);

  React.useEffect(() => {
    if (initialValue) {
      const formattedUrl = formatLink(initialValue, 'pictures');
      setPreview(formattedUrl);
    }
  }, [initialValue]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (preview && !preview.includes('pictures')) {
        URL.revokeObjectURL(preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleRemoveImage = () => {
    if (preview && !preview.includes('pictures')) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    setValue(name, null, { shouldValidate: true });
  };

  React.useEffect(() => {
    return () => {
      if (preview && !preview.includes('pictures')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const containerStyle = {
    width,
  };

  const wrapperStyle = {
    width,
    height,
  };

  return (
    <div className={styles.imageInputContainer} style={containerStyle}>
      <label className={styles.label} htmlFor={name}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.inputWrapper} style={wrapperStyle}>
        <input
          type="file"
          accept={accept}
          className={styles.fileInput}
          onChange={handleImageChange}
          {...registerRest}
        />

        {preview ? (
          <div className={styles.previewContainer}>
            <Image
              src={preview}
              alt="Preview"
              width={300}
              height={300}
              className={styles.preview}
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className={styles.removeButton}
            >
              <Image
                src="/icons/exclude-post-icon.svg"
                alt="Remover"
                width={28}
                height={28}
              />
            </button>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <Image
              src="/icons/upload-photo.svg"
              alt="Upload"
              width={32}
              height={32}
            />
            <span>Click to upload image</span>
          </div>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
