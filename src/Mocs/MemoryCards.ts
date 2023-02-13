export const memoryCardMoc = [...Array(6)].map((_, i) => ({
  id: i,
  title: `Pack ${i + 1}`,
  description: 'Lorem ipsum dolor.',
}));
