module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const newItem = { ...item };
  if (newItem.enhancement < 20) {
    newItem.enhancement++;
  }
  return newItem;
}

function fail(item) {
  const newItem = { ...item };

  if (newItem.enhancement < 15) {
    if (newItem.durability >= 0) {
      newItem.durability -= 5;
    } else {
      newItem.durability == 0;
    }
  }

  if (newItem.enhancement >= 15) {
    newItem.durability -= 10;
  }

  if (newItem.enhancement > 16) {
    newItem.enhancement--;
  }
  return newItem;
};

function repair(item) {
  const newItem = { ...item };
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  return { ...item };
}

// function fail(item) {
//   const newItem = { ...item };
//   newItem.durability >= 0 && newItem.durability <= 100;

//   if (newItem.enhancement < 15) {
//     // newItem.durability == 0;
//     if (newItem.durability > 0) {
//       newItem.durability -= 5;
//     } else {
//       newItem.durability == 0;
//     }
//   }

//   if (newItem.enhancement >= 15) {
//     newItem.durability -= 10;
//   }

//   if (newItem.enhancement > 16) {
//     newItem.enhancement--;
//   }

//   return newItem;
// };
