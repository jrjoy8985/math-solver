function solveMath() {
  const input = document.getElementById('input').value;

  // বাংলায় কিছু সহজ রূপান্তর
  let question = input
    .replace(/যোগ/g, '+')
    .replace(/বিয়োগ/g, '-')
    .replace(/গুণ/g, '*')
    .replace(/ভাগ/g, '/');

  try {
    // সহজ প্রশ্নের উত্তর বের করা
    const result = eval(question);
    document.getElementById('output').innerText = `উত্তর: ${result}`;
  } catch (error) {
    document.getElementById('output').innerText = '❌ প্রশ্নটি বুঝতে পারিনি।';
  }
}
