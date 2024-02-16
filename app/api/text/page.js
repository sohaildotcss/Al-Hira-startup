const textData = {
  en: [
    { id: 1, content: 'Sample English text 1' },
    { id: 2, content: 'Sample English text 2' },
  ],
  ur: [
    { id: 1, content: 'مثال اردو متن 1' },
    { id: 2, content: 'مثال اردو متن 2' },
  ],
};

export default function handler(req, res) {
  res.status(200).json(textData);
}