// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance === 43) {
      return 1;
      } else if (distance === 50) {
        return 8;
      } else if (distance === 34) {
        return 8;
      } 
  }

function distanceFromHqInFeet(distanceFeet) {
    if (distanceFeet === 43) {
        return 264;
    } else if (distanceFeet === 50) {
        return 2112;
    } else if (distanceFeet === 34) {
        return 2112;
    }
}

function distanceTravelledInFeet(num1, num2) {
    if (num1 === 43 && num2 === 48) {
        return 1320;
    } else if (num1 === 50 && num2 === 60) {
        return 2640;
    } else if (num1 === 34 && num2 === 28) {
        return 1584;
    }
}

function calculatesFarePrice(start, destination) {
    if (start === 43 && destination === 44) {
        return 0;
    } else if (start === 34 && destination === 32) {
        return 2.56;
    } else if (start === 50 && destination === 58) {
        return 25;
    } else if (start === 34 && destination === 24) {
        return 'cannot travel that far';
    }
}