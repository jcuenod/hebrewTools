import { c as createCommonjsModule, a as commonjsGlobal } from './common/_commonjsHelpers-eb5a497e.js';

var sequence = createCommonjsModule(function (module, exports) {
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (commonjsGlobal && commonjsGlobal.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = void 0;
var consonants = /[\u{05D0}-\u{05F2}]/u;
var ligature = /[\u{05C1}-\u{05C2}]/u;
var dagesh = /[\u{05BC},\u{05BF}]/u; // includes rafe
var vowels = /[\u{05B0}-\u{05BB},\u{05C7}]/u;
var accents = /[\u{0590}-\u{05AF},\u{05BD}-\u{05BE},\u{05C0},\u{05C3}]/u;
var Char = /** @class */ (function () {
    function Char(char) {
        this.char = char;
        this.posIndex = this.findPos(this.char);
    }
    Char.prototype.findPos = function (char) {
        if (consonants.test(char)) {
            return 0;
        }
        if (ligature.test(char)) {
            return 1;
        }
        if (dagesh.test(char)) {
            return 2;
        }
        if (vowels.test(char)) {
            return 3;
        }
        if (accents.test(char)) {
            return 4;
        }
        return 10;
    };
    return Char;
}());
exports.Sequence = function (text) {
    var splits = /(?=[\u{05D0}-\u{05F2}])/u;
    var charClusters = text.split(splits);
    var mapClusters = charClusters.map(function (cluster) { return __spread(cluster).map(function (char) { return new Char(char); }); });
    var sortClusters = mapClusters.map(function (cluster) { return cluster.sort(function (a, b) { return a.posIndex - b.posIndex; }); });
    var redClusters = sortClusters.map(function (cluster) { return cluster.reduce(function (a, c) { return a + c.char; }, ""); });
    var seqText = redClusters.reduce(function (a, c) { return a + c; });
    return seqText;
};

});

var remove = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
var cantillation = /[\u{0591}-\u{05AF}\u{05BF}\u{05C0}\u{05C3}-\u{05C6}\u{05F3}\u{05F4}]/gu;
var vowels = /[\u{05B0}-\u{05BD}\u{05BF}\u{05C7}]/gu;
var shinDot = /\u{05C1}/gu;
var sinDot = /\u{05C2}/gu;
var removeItem = function (text, item) { return text.replace(item, ""); };
exports.Remove = function (text, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.removeVowels, removeVowels = _c === void 0 ? false : _c, _d = _b.removeShinDot, removeShinDot = _d === void 0 ? false : _d, _e = _b.removeSinDot, removeSinDot = _e === void 0 ? false : _e;
    var remCantillation = removeItem(text, cantillation);
    var remVowels = removeVowels ? removeItem(remCantillation, vowels) : remCantillation;
    var remShin = removeShinDot ? removeItem(remVowels, shinDot) : remVowels;
    var remSin = removeSinDot ? removeItem(remShin, sinDot) : remShin;
    return remSin;
};

});

var qametsQatan = createCommonjsModule(function (module, exports) {
var __values = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qametsQ = void 0;
var qQsnippets = [
    "????z??n",
    "????k??l",
    "????k??l",
    "????niy??",
    "????p??n",
    "????r?????",
    "????r??k??",
    "????????r",
    "b????????",
    "b??????t??",
    "b????????t??",
    "g??b??h",
    "g????b??h",
    "g??d??l",
    "g????d??l",
    "g??r??n",
    "g????r??n",
    "?????d????",
    "?????k??m",
    "?????l??y??w??",
    "?????l??y??w",
    "?????n????niy",
    "?????p??n",
    "?????p??niy",
    "?????p????iy",
    "?????p????iyt",
    "?????q-",
    "?????r??b",
    "?????r??neper",
    "?????r??p??",
    "?????????k??",
    "y??p??y",
    "y??????r",
    "k??l-",
    "k????l-",
    "m??r-",
    "m??r??d????kay",
    "m??t??n",
    "s??l??t??",
    "????z??",
    "????m??riy",
    "????n??y",
    "????p??r",
    "????r??l",
    "????r??p??",
    "????????r",
    "?????r??k??",
    "q??d??q",
    "q??d????",
    "q??r??b??",
    "q??r?????",
    "r??b-",
    "r??g??z",
    "r???????b??",
    "????r????",
    "????r????",
    "??????r????",
    "t????k??niyt",
    "t??m-",
    "t????m-"
];
var qQRgx = qQsnippets.map(function (snippet) { return new RegExp(snippet, "m"); });
var qametsQatanDict = {
    // for certain inflected and contextual occurences
    b????????b??dan: "b????obdan",
    h??????b??n??yim: "h????obn??yim",
    ?????q??k??: "???oqk??",
    ?????q??kem: "???oqkem",
    had????r??b????n: "haddorb??n",
    l??????k??l????h: "l????okl??h",
    haq????r??b????n: "haqqorb??n",
    ?????p??ra??: "???opra??",
    way????m??t: "way????mot",
    way????n??s: "way????nos",
    way????q??m: "way????qom",
    way????r??m: "way????r??m",
    way??????????b: "way????????ob",
    wat????m??t: "wat????mot",
    wat????q??m: "wat????qom",
    wat??????????b: "wat????????ob",
    w??h????????p??niy: "w??h????opniy",
    t????k??ni??yt: "tokniyt" // with silluq
};
exports.qametsQ = function (text) {
    return text.map(function (word) {
        var e_1, _a;
        //   if there is no qamets char, return
        if (!/??/.test(word)) {
            return word;
        }
        if (qametsQatanDict[word]) {
            return qametsQatanDict[word];
        }
        if (/??/.test(word)) {
            var pos = word.indexOf("??");
            if (word.charAt(pos - 2) === "??") {
                return word.substring(pos - 2) + "o" + word.substring(pos - 1);
            }
        }
        try {
            for (var qQRgx_1 = __values(qQRgx), qQRgx_1_1 = qQRgx_1.next(); !qQRgx_1_1.done; qQRgx_1_1 = qQRgx_1.next()) {
                var rgx = qQRgx_1_1.value;
                if (rgx.test(word)) {
                    var newRgx = rgx.source.split("??").join("o");
                    var matches = rgx.source.match(/??/g);
                    // checks for qQ forms w/ two ??'s
                    if (matches && matches.length >= 2) {
                        var parts = rgx.source.split("??");
                        var firstMatch = [parts.shift(), parts.join("??")];
                        newRgx = firstMatch.join("o");
                    }
                    return word.split(rgx).join(newRgx);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (qQRgx_1_1 && !qQRgx_1_1.done && (_a = qQRgx_1.return)) _a.call(qQRgx_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return word;
    });
};

});

var hebCharsTrans = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterateMap = void 0;
exports.transliterateMap = {
    //   niqqud
    "\u05B0": "??",
    "\u05B1": "??",
    "\u05B2": "??",
    "\u05B3": "??",
    "\u05B4": "i",
    "\u05B5": "??",
    "\u05B6": "e",
    "\u05B7": "a",
    "\u05B8": "??",
    "\u05B9": "??",
    "\u05BA": "??",
    "\u05BB": "u",
    //  "\u{05BC}": "", // HEBREW POINT DAGESH OR MAPIQ (U+05BC)
    //  "\u{05BD}": "", // HEBREW POINT METEG (U+05BD)
    "\u05BE": "-",
    "\u05C7": "??",
    //   consonants
    ??: "??",
    ??: "b",
    ??: "g",
    ??: "d",
    ??: "h",
    ??: "w",
    ??: "z",
    ??: "???",
    ??: "???",
    ??: "y",
    ??: "k",
    ??: "k",
    ??: "l",
    ??: "m",
    ??: "m",
    ??: "n",
    ??: "n",
    ??: "s",
    ??: "??",
    ??: "p",
    ??: "p",
    ??: "???",
    ??: "???",
    ??: "q",
    ??: "r",
    ??: "??",
    ??: "t",
    "\u05EF": "",
    ??: "",
    ??: "",
    ??: "" // HEBREW LIGATURE YIDDISH DOUBLE YOD (U+05F2)
};

});

var titForTat = createCommonjsModule(function (module, exports) {
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (commonjsGlobal && commonjsGlobal.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.titForTat = void 0;

exports.titForTat = function (text) {
    return __spread(text).map(function (char) { return (char in hebCharsTrans.transliterateMap ? hebCharsTrans.transliterateMap[char] : char); })
        .reduce(function (a, c) { return a + c; }, "");
};

});

var testEach = createCommonjsModule(function (module, exports) {
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (commonjsGlobal && commonjsGlobal.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEach = void 0;
var changeElementSplit = function (input, split, join) { return input.split(split).join(join); };
var changeElementSubstr = function (input, index, join) {
    return input.substring(0, index) + join + input.substring(index + 1);
};
var academicRules = function (array, _a) {
    var _b = (_a === void 0 ? {} : _a).isSimple, isSimple = _b === void 0 ? false : _b;
    return array.map(function (element) {
        if (element === " " || !element) {
            return element;
        }
        // Tests for shin non-ligatures
        // if (/\u{05C1}/u.test(element)) {
        //   element = changeElementSplit(element, /\u{05C1}/u, "");
        // }
        // Tests for sin non-ligatures
        if (/??\u{05C2}/u.test(element)) {
            element = changeElementSplit(element, /??\u{05C2}/u, "??");
        }
        // remove metheg that is left in for checking qamets qatan vs gadol
        if (/\u{05BD}/u.test(element)) {
            element = changeElementSplit(element, /\u{05BD}/u, "");
        }
        // Tests for hiriq-yod mater
        if (/iy(?!??|??|??|??|i|??|e|a|??|??|u|\u{05BC})/u.test(element)) {
            element = changeElementSplit(element, /iy(?!??|??|??|??|i|??|e|a|??|??|u|\u05BC)/, "??");
        }
        // Tests for tsere-yod mater
        if (/??y(?!??|??|??|??|i|??|e|a|??|??|u|\u{05BC})/u.test(element)) {
            element = changeElementSplit(element, /??y(?!??|??|??|??|i|??|e|a|??|??|u|\u05BC)/, "??");
        }
        // Tests for seghol-yod mater
        if (/ey(?!??|??|??|??|i|??|e|a|??|??|u|\u{05BC})/u.test(element)) {
            element = changeElementSplit(element, /ey(?!??|??|??|??|i|??|e|a|??|??|u|\u05BC)/, "??");
        }
        // Tests for waw as a holem-mater
        if (/w??/.test(element)) {
            // this is a workaround for lack of lookbehind support
            var rev = __spread(element).reverse().reduce(function (a, c) { return a + c; });
            if (/??w(?!??|??|??|??|i|??|e|a|??|u)/.test(rev)) {
                rev = changeElementSplit(rev, /??w(?!??|??|??|??|i|??|e|a|??|u)/, "??");
            }
            element = __spread(rev).reverse().reduce(function (a, c) { return a + c; });
        }
        // Tests for waw as a holem-mater
        // this will catch a waw as a consonant like - C+??+w+V+C > C??wVC
        if (/??w(?!??|??|??|??|i|??|e|a|??|u|\u{05BC})/u.test(element)) {
            element = changeElementSplit(element, /??w(?!??|??|??|??|i|??|e|a|??|u|\u05BC)/, "??");
        }
        // Tests for waw as a shureq-mater
        if (/w\u{05BC}(?!??|??|??|??|i|??|e|a|??|??|o|??|u|??)/u.test(element)) {
            element = changeElementSplit(element, /w\u05BC(?!??|??|??|??|i|??|e|a|??|??|o|??|u|??)/, "??");
        }
        // Tests for He as a final mater
        /* if using simple version, ??h remains so that it is passed into simpleRules
        if not, then there would be now way to distinguish between ?? from tsere-yod vs he-mater */
        if (!isSimple) {
            if (/??h(?=$|-)/m.test(element)) {
                element = changeElementSplit(element, /??h(?=$|-)/m, "??");
            }
            else if (/??h(?=$|-)/m.test(element)) {
                element = changeElementSplit(element, /??h(?=$|-)/m, "??");
            }
            else if (/eh(?=$|-)/m.test(element)) {
                element = changeElementSplit(element, /eh(?=$|-)/m, "??");
            }
        }
        // tests for he with mappiq or furtive patach
        if (/h\u{05BC}$/mu.test(element)) {
            element = changeElementSplit(element, /h\u{05BC}$/mu, "h");
        }
        else if (/h\u{05BC}a$/mu.test(element)) {
            element = changeElementSplit(element, /h\u{05BC}a$/mu, "ah");
        }
        else if (/???a$/m.test(element)) {
            element = changeElementSplit(element, /???a$/m, "a???");
        }
        else if (/??a$/m.test(element)) {
            element = changeElementSplit(element, /??a$/m, "a??");
        }
        // Tests if a shewa exists in the element
        if (/??/.test(element)) {
            var pos = element.indexOf("??");
            while (pos !== -1) {
                // shewa at the end of a word
                if (element.charAt(element.length - 1) === "??") {
                    element = changeElementSubstr(element, element.length - 1, "");
                }
                // if the shewa is preceded by a short vowel
                if (/??|a|e|i|u|o/.test(element.charAt(pos - 2))) {
                    // if it SQeNeM LeVY letters in wayyiqtol forms
                    if (/s|???|??|??|q|n|m|l|w|y/.test(element.charAt(pos - 1)) && /w/.test(element.charAt(pos - 3))) {
                        element = element;
                    }
                    else {
                        element = changeElementSubstr(element, pos, "");
                    }
                }
                pos = element.indexOf("??", pos + 1);
            }
            element = element;
        }
        // tests for a doubling dagesh
        if (/\u{05BC}/u.test(element)) {
            var elArray_1 = element.split("");
            elArray_1.forEach(function (e, i) {
                if (e === "\u05BC" && /a|??|e|??|i|??|u|??|o|??|??/.test(elArray_1[i - 2]) && Boolean(elArray_1[i - 2])) {
                    elArray_1[i] = elArray_1[i - 1];
                }
            });
            element = elArray_1.join("");
        }
        //  tests for yhwh
        if (element === "y??hw??") {
            element = "yhwh";
        }
        else if (element.includes("y??hw??")) {
            element = changeElementSplit(element, /y??hw??/, "yhwh");
        }
        else if (element.includes("yhw??")) {
            element = changeElementSplit(element, /yhw??/, "yhwh");
        }
        // removes any remaining dageshes
        if (/\u{05BC}/u.test(element)) {
            element = changeElementSplit(element, /\u{05BC}/u, "");
        }
        return element;
    }); // map
};
var simpleRules = function (array) {
    return array.map(function (element) {
        if (element === " " || !element) {
            return element;
        }
        // remove aleph half-ring
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "");
        }
        // remove ayin half-ring
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "");
        }
        // simplify he-mater
        if (/??h$/m.test(element)) {
            element = changeElementSplit(element, /??h$/m, "ah");
        }
        else if (/??h$/.test(element)) {
            element = changeElementSplit(element, /??h$/m, "eh");
        }
        // simplify hiriq-yod
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "i");
        }
        // simplify tsere-yod / seghol-yod
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "e");
        }
        // simplify holem-waw
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "o");
        }
        // simplify shureq
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "u");
        }
        // remove doubling of shin
        if (/????/.test(element)) {
            element = changeElementSplit(element, /????/, "??");
        }
        // remove doubling of tsade
        if (/??????/.test(element)) {
            element = changeElementSplit(element, /??????/, "???");
        }
        // simplify long-a
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "a");
        }
        // simplify short-a
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "a");
        }
        // simplify long-e
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "e");
        }
        // simplify short-e
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "e");
        }
        // simplify long-i
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "i");
        }
        // simplify long-o
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "o");
        }
        // simplify short-o
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "o");
        }
        // simplify long-u
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "u");
        }
        // simplify shewa
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "e");
        }
        // spirantized cons
        /* Since the negative lookbehind regex is not well supported,
        the string is reversed and then the regex searches the pattern of
        the consonant that is followed by a vowel (which preceded it in the original direction)
        */
        var rev = __spread(element).reverse().reduce(function (a, c) { return a + c; }, "");
        // change b > v
        if (/b/.test(element) && !/bb/.test(element)) {
            if (/b(?=[aeiou])/.test(rev)) {
                rev = changeElementSplit(rev, /b(?=[aeiou])/, "v");
            }
        }
        // change p > f
        if (/p/.test(element) && !/pp/.test(element)) {
            if (/p(?=[aeiou])/.test(rev)) {
                rev = changeElementSplit(rev, /p(?=[aeiou])/, "f");
            }
        }
        // change k > kh
        if (/k/.test(element) && !/kk/.test(element)) {
            if (/k(?=[aeiou])/.test(rev)) {
                //   when the string is reversed back 'hk' > 'kh'
                rev = changeElementSplit(rev, /k(?=[aeiou])/, "hk");
            }
        }
        element = __spread(rev).reverse().reduce(function (a, c) { return a + c; }, "");
        // simplify ???et
        if (/???/.test(element)) {
            element = changeElementSplit(element, /???/, "t");
        }
        // simplify tsade
        if (/???/.test(element)) {
            element = changeElementSplit(element, /???/, "ts");
        }
        // simplify shin
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "sh");
        }
        // simplify sin
        if (/??/.test(element)) {
            element = changeElementSplit(element, /??/, "s");
        }
        // simplify ???et
        if (/???/.test(element)) {
            element = changeElementSplit(element, /???/, "kh");
        }
        // simplify waw
        if (/w/.test(element)) {
            element = changeElementSplit(element, /w/, "v");
        }
        //  tests for yhwh
        if (element === "yehvah") {
            element = "yhwh";
        }
        return element;
    }); // map
};
exports.testEach = function (array, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.qametsQatan, qametsQatan = _c === void 0 ? false : _c, _d = _b.isSimple, isSimple = _d === void 0 ? false : _d;
    var academic = academicRules(array, { qametsQatan: qametsQatan, isSimple: isSimple });
    return !isSimple ? academic : simpleRules(academic);
};

});

var transliterate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transliterate = void 0;





exports.Transliterate = function (text, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isSequenced, isSequenced = _c === void 0 ? true : _c, _d = _b.qametsQatan, qametsQatan$1 = _d === void 0 ? false : _d, _e = _b.isSimple, isSimple = _e === void 0 ? false : _e;
    var newSeq = isSequenced ? sequence.Sequence(text) : text;
    var rmvCantillation = remove.Remove(newSeq, { removeShinDot: true });
    var titTat = titForTat.titForTat(rmvCantillation);
    var array = titTat.split(/(\s|\S*\-)/);
    var sanitized = qametsQatan$1 ? qametsQatan.qametsQ(array) : array;
    var modArray = testEach.testEach(sanitized, { isSimple: isSimple });
    var transliteration = modArray.reduce(function (a, c) { return a + c; }, "");
    return transliteration;
};

});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequence = exports.remove = exports.transliterate = void 0;



exports.transliterate = function (text, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isSequenced, isSequenced = _c === void 0 ? true : _c, _d = _b.qametsQatan, qametsQatan = _d === void 0 ? false : _d, _e = _b.isSimple, isSimple = _e === void 0 ? false : _e;
    var normalized = text.normalize("NFKD");
    return transliterate.Transliterate(normalized, { isSequenced: isSequenced, qametsQatan: qametsQatan, isSimple: isSimple });
};
exports.remove = function (text, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.removeVowels, removeVowels = _c === void 0 ? false : _c, _d = _b.removeShinDot, removeShinDot = _d === void 0 ? false : _d, _e = _b.removeSinDot, removeSinDot = _e === void 0 ? false : _e;
    var normalized = text.normalize("NFKD");
    var removed = remove.Remove(normalized, { removeVowels: removeVowels, removeShinDot: removeShinDot, removeSinDot: removeSinDot });
    var noMetheg = removed.replace(/\u{05BD}/gu, "");
    var sequenced = sequence.Sequence(noMetheg);
    return sequenced;
};
exports.sequence = function (text) {
    var normalized = text.normalize("NFKD");
    return sequence.Sequence(normalized);
};

});

var remove$1 = dist.remove;
var transliterate$1 = dist.transliterate;
export { remove$1 as remove, transliterate$1 as transliterate };
