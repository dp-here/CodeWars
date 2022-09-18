function likes(names) {

  let arrCount = Math.min(names.length, 4);
  let name = '';
  if (names.length == 0) {
    name = '';
  } else {
    name = names.join();
  }

  const templates = [
    'no one likes this',
    `${name} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,

  ]
  return templates[arrCount];


}

console.log(likes(["Alex", "yyyy", "erere", "Alex", "Alex", "Alex"]));