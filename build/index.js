"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { "Accept": "application/json" }
        });
        const data = yield response.json();
        return data.joke;
    });
}
;
const siguienteJoke = document.getElementById("siguiente_joke");
siguienteJoke === null || siguienteJoke === void 0 ? void 0 : siguienteJoke.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const joke = yield fetchJoke();
    console.log(joke);
}));
