"use strict";
(function () {
    var AudioLeve;
    (function (AudioLeve) {
        AudioLeve[AudioLeve["min"] = 0] = "min";
        AudioLeve[AudioLeve["medium"] = 1] = "medium";
        AudioLeve[AudioLeve["max"] = 2] = "max";
    })(AudioLeve || (AudioLeve = {}));
    ;
    var currentAudio = AudioLeve.medium;
    console.log(currentAudio);
    console.log({ AudioLeve: AudioLeve });
})();
//# sourceMappingURL=enums.js.map