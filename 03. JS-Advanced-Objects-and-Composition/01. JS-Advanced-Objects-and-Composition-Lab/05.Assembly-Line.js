function createAssemblyLine() {
  return {
    hasClima(myCar) {
      myCar.temp = 21;
      myCar.tempSettings = 21;
      myCar.adjustTemp = () => {
        if (myCar.temp < myCar.tempSettings) {
          myCar.temp++;
        } else if (myCar.temp > myCar.tempSettings) {
          myCar.temp--;
        }
      };
    },
    hasAudio(myCar) {
      myCar.currentTrack = null;
      myCar.nowPlaying = function () {
        if (this.currentTrack !== null && this.currentTrack !== undefined) {
          console.log(
            `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic(myCar) {
      myCar.checkDistance = (x) => {
        let distance = Number(x);
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (0.1 <= distance && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (0.25 <= distance && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();
