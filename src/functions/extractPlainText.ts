const extractPlainText = (content: string) => {
  try {
    const parsedContent = JSON.parse(content);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return parsedContent.blocks.map((block: any) => block.data.text).join(' ');
  } catch (error) {
    console.error('Error parsing content:', error);
    return '';
  }
};

export default extractPlainText;
