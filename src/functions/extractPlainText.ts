const extractPlainText = (content: string) => {
  try {
    const parsedContent = JSON.parse(content);
    return parsedContent.blocks.map((block: any) => block.data.text).join(' ');
  } catch (error) {
    console.error('Error parsing content:', error);
    return '';
  }
};

export default extractPlainText;
