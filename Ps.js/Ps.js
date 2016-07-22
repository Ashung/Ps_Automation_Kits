


var TEMPLATES = {
    "iPhone3" :           { "width" : 320,  "height" : 480,  "ratio" : 1 },
    "iPhone4" :           { "width" : 320,  "height" : 480,  "ratio" : 2 },
    "iPhone5" :           { "width" : 320,  "height" : 568,  "ratio" : 2 },
    "iPhone6" :           { "width" : 375,  "height" : 667,  "ratio" : 3 },
    "iPhone6+" :          { "width" : 414,  "height" : 736,  "ratio" : 3 },
    "iPad" :              { "width" : 768,  "height" : 1024, "ratio" : 1 },
    "iPadRetina" :        { "width" : 768,  "height" : 1024, "ratio" : 2 },
    "iPadPro" :           { "width" : 1,    "height" : 1,    "ratio" : 2 },
    "appleWatch42mm" :    { "width" : 312,  "height" : 390,  "ratio" : 2 },
    "appleWatch38mm" :    { "width" : 272,  "height" : 340,  "ratio" : 2 },
    "androidPhone" :      { "width" : 360,  "height" : 640,  "ratio" : 1 },
    "androidPhone720p" :  { "width" : 360,  "height" : 640,  "ratio" : 2 },
    "androidPhone1080p" : { "width" : 360,  "height" : 640,  "ratio" : 3 },
    "androidPhone2k" :    { "width" : 360,  "height" : 640,  "ratio" : 4 },
    "androidTablet7in" :  { "width" : 600,  "height" : 960,  "ratio" : 2 },
    "androidTablet9in" :  { "width" : 768,  "height" : 1024, "ratio" : 1 },
    "webMobile" :         { "width" : 320,  "height" : 1024, "ratio" : 1 },
    "webTable" :          { "width" : 768,  "height" : 1024, "ratio" : 1 },
    "webDesktop" :        { "width" : 1024, "height" : 1024, "ratio" : 1 }
}

// -> String YYYYMMDD
var DATE = (function(){
    var y = new Date().getFullYear(),
        m = new Date().getMonth() > 8 ? new Date().getMonth() + 1 : "0" + (new Date().getMonth() + 1),
        d = new Date().getDate() > 9 ? new Date().getDate() : "0" + new Date().getDate();
    return "" + y + m + d;
})();

// -> String YYYY-MM-DD
var DATE_FORMAT = (function(){
    var y = new Date().getFullYear(),
        m = new Date().getMonth() > 8 ? new Date().getMonth() + 1 : "0" + (new Date().getMonth() + 1),
        d = new Date().getDate() > 9 ? new Date().getDate() : "0" + new Date().getDate();
    return y + "-" + m + "-" + d;
})();

// -> String HHMMSS
var TIME = (function(){
    var h = new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours(),
        m = new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes(),
        s = new Date().getSeconds() > 9 ? new Date().getSeconds() : "0" + new Date().getSeconds();
    return "" + h + m + s;
})();

// -> String HH:MM:SS
var TIME_FORMAT = (function(){
    var h = new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours(),
        m = new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes(),
        s = new Date().getSeconds() > 9 ? new Date().getSeconds() : "0" + new Date().getSeconds();
    return h + ":" + m + ":" + s;
})();

// -> String 1441615700807
var TIMESTAMP = new Date().getTime();

// -> String x/xx/Ps.js
var SCRIPTNAME = $.fileName;

// -> String x/xx/
var SCRIPTPATH = $.fileName;

// -> String Macintosh OS 10.10.5/64
var OS = $.os;



// ver DESKTOP;
//
// var USER;
//
// var SYSTEM;
//
// var VERSION

// colorPicker([colorHex: String]) -> SolidColor
// [colorHex: String RRGGBB]
function colorPicker(colorHex) {
    var hex = "000000";
    if(colorHex == undefined) {
        hex = $.colorPicker().toString(16);
    } else {
        var decimal = Number("0x" + colorHex).toString();
        hex = $.colorPicker(decimal).toString(16);
    }
    var l = 6 - hex.length
    for(var i = 0; i < l; i ++) {
        hex = "0" + hex;
    }
    var colorRef = new SolidColor();
        colorRef.rgb.hexValue = hex;
    return colorRef;
}

////////////////////////////////////////////////////////////////////////////////
// File IO
////////////////////////////////////////////////////////////////////////////////

// Graphic file formats
// https://helpx.adobe.com/photoshop/using/supported-file-formats-photoshop-cs6.html
var PHOTOSHOP_READABLE_DOCUMENTS = [
    {
        "ext" : "psd",
        "file" : "Photoshop PSD"
    },
    {
        "ext" : "psb",
        "file" : "Large Document Format PSB"
    },
    {
        "ext" : "bmp",
        "file" : "BMP"
    },
    {
        "ext" : "cin",
        "file" : "Cineon"
    },
    {
        "ext" : "gif",
        "file" : "CompuServe GIF"
    },
    {
        "ext" : "eps",
        "file" : "Photoshop DCS 1.0"
    },
    {
        "ext" : "eps",
        "file" : "Photoshop DCS 2.0"
    },
    {
        "ext" : "dcm",
        "file" : "DICOM"
    },
    {
        "ext" : "eps",
        "file" : "Photoshop EPS"
    },
    {
        "ext" : "iff",
        "file" : "IFF format"
    },
    {
        "ext" : ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi"],
        "file" : "JPEG"
    },
    {
        "ext" : "jpf",
        "file" : "JPEG2000"
    },
    {
        "ext" : "exr",
        "file" : "OpenEXR"
    },
    {
        "ext" : "pcx",
        "file" : "PCX"
    },
    {
        "ext" : "pdf",
        "file" : "Photoshop PDF"
    },
    {
        "ext" : "pxr",
        "file" : "Pixar"
    },
    {
        "ext" : "png",
        "file" : "PNG"
    },
    {
        "ext" : "pbm",
        "file" : "Portable Bit Map"
    },
    {
        "ext" : "raw",
        "file" : "Photoshop Raw"
    },
    {
        "ext" : "sct",
        "file" : "Scitex CT"
    },
    {
        "ext" : "tga",
        "file" : "Targa"
    },
    {
        "ext" : ["tif", "tiff"],
        "file" : "TIFF"
    },
    {
        "ext" : "wbmp",
        "file" : "Wireless Bitmap"
    },
    {
        "ext" : "psd",
        "file" : "Photoshop 2.0 (Mac only)"
    },
    {
        "ext" : ["pict", "pct", "pic"],
        "file" : "PICT (read only)"
    },
    {
        "ext" : ["pict", "pct", "pic"],
        "file" : "PICT Resource (Mac only, can open only)"
    },
    {
        "ext" : ["pic", "hdr", "rgbe", "xyze"],
        "file" : "Radiance"
    }
];

// getFileExtension(file: String|File) -> String
// file: String|File
function getFileExtension(file) {
    var name = "";
    if(typeof(file) == "string") {
        name = file;
    }
    if(file instanceof File) {
        name = file.name;
    }
    var ext = name.substring(name.lastIndexOf(".") + 1, name.length);
    return ext;
}

// isReadable(file: String|File, readableDocList: Array) -> Boolean
// file: File("~/Desktop/img.png") | "~/Desktop/img.png"
// readableDocList: PHOTOSHOP_READABLE_DOCUMENTS
function isReadable(file, readableDocList) {
    var ext = getFileExtension(file);
    if(ext == "")
        return false;
    for(var i = 0; i < readableDocList.length; i++) {
        if (readableDocList[i]["ext"] == ext) {
            return true;
        }
        if (readableDocList[i]["ext"] instanceof Array) {
            for(var j = 0; j < readableDocList[i]["ext"].length; j++) {
                if (readableDocList[i]["ext"][j] == ext) {
                    return true;
                }
            }
        }
    }
    return false;
}

// isPsd(file: String|File) -> Boolean
function isPsd(file) {
    return /.(psd|psb)$/i.test(file);
}

function isPng(file) {
    return /.png$/i.test(file);
}

function isJpg(file) {
    return /.(jpg|jpeg|jpe|jif|jfif|jfi)$/i.test(file);
}

function isGif(file) {
    return /.gif$/i.test(file);
}

function isTiff(file) {
    return /.(tif|tiff)$/i.test(file);
}

// directoryTraversal(dir: String|Folder, fn: function)
function directoryTraversal(dir, fn) {
    var folder;
    if(typeof(dir) == "string") {
        folder = Folder(dir);
    }
    if(folder.exists) {
        var files = folder.getFiles();
        for(var i = 0; i < files.length; i++) {
            if(files[i] instanceof Folder) {
                directoryTraversal(files[i], fn);
            }
            if(files[i] instanceof File) {
                fn(files[i]);
            }
        }
    }
}



// getSelectedLayersIndexs() -> Array
function getSelectedLayersIndexs() {
    var selectedLayers = new Array;
    var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    var desc = executeActionGet(ref);

    if(desc.hasKey(stringIDToTypeID('targetLayers'))) {
        desc = desc.getList(stringIDToTypeID('targetLayers'));
        var c = desc.count;
        var selectedLayers = new Array();
        for(var i = 0; i < c; i++) {
            try {
                activeDocument.backgroundLayer;
                selectedLayers.push(desc.getReference(i).getIndex());
            } catch(e) {
                selectedLayers.push(desc.getReference( i ).getIndex()+1);
            }
        }
    } else {
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('ItmI'));
        ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        try {
            activeDocument.backgroundLayer;
            selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID('ItmI'))-1);
        } catch(e) {
            selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID('ItmI')));
        }
    }
    return selectedLayers;
}

// selectLayerByIndex(index: Number) -> artLayer
function selectLayerByIndex(index) {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
        ref1.putIndex(charIDToTypeID("Lyr "), index);
        desc1.putReference(charIDToTypeID("null"), ref1);
        executeAction(charIDToTypeID("slct"), desc1, DialogModes.NO);
}

// smartobjectReplaceContents(file: File|String)
// file: File("~/Desktop/img.png") | "~/Desktop/img.png"
function smartobjectReplaceContents(file) {
    if(typeof(file) == "string") {
        file = File(file);
    }
    // activeDocument.activeLayer == smartObject;
    if(file.exists && true) {
        var desc1 = new ActionDescriptor();
            desc1.putPath(charIDToTypeID("null"), f);
            executeAction(stringIDToTypeID("placedLayerReplaceContents"), desc1, DialogModes.NO);
    }
}

// traversalLayes(doc: Document|Layer, fn: Function)
// doc: activeDocument | app.activeDocument.activeLayer
// fn: function(){...}
function traversalLayes(doc, fn) {
    //how many layers are there in this document?
    var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    var count = executeActionGet(ref).getInteger(charIDToTypeID('NmbL'));
    //traverse the list backwards (does parents first)
    for (var i = count; i >= 1; i--) {
        try{
            var ref = new ActionReference();
                ref.putIndex(charIDToTypeID('Lyr '), i);
            //access layer index #i
            var desc = executeActionGet(ref);
            //ID for selecting by ID #
            var layerID = desc.getInteger(stringIDToTypeID('layerID'));
            var layerSection = typeIDToStringID(desc.getEnumerationValue(stringIDToTypeID('layerSection')));
            if (layerSection != 'layerSectionEnd') {
                //select layer by id
                var ref = new ActionReference();
                var desc = new ActionDescriptor();
                    ref.putIdentifier(charIDToTypeID('Lyr '), layerID);
                    desc.putReference(charIDToTypeID('null'), ref);
                    desc.putBoolean(charIDToTypeID('MkVs'), false);
                    executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
                //apply function to selected layer
                fn(app.activeDocument.activeLayer);
            }
        } catch(e) {}
    }
}

// getGlobalLightAngle() -> Number: -180 - 180
function getGlobalLightAngle() {
    var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var angle = executeActionGet(ref).getInteger(stringIDToTypeID('globalAngle'));
    return angle;
}

// getGlobalLightAltitude() -> Number: 0 - 90
function getGlobalLightAltitude() {
    var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var altitude = executeActionGet(ref).getObjectValue(stringIDToTypeID('globalAngle')).getUnitDoubleValue(stringIDToTypeID('globalAltitude'));
    return altitude;
}

// setDocumentGlobalAngle(globalLightingAngle: Number, globalAltitude: Number)
// globalLightingAngle: -180 - 180
// globalAltitude: 0 - 90
function setDocumentGlobalAngle(globalLightingAngle, globalAltitude) {
    var desc1 = new ActionDescriptor ();
    var ref = new ActionReference ();
        ref.putProperty(stringIDToTypeID ("property"), stringIDToTypeID ("globalAngle"));
        ref.putEnumerated(stringIDToTypeID ("document"), stringIDToTypeID ("ordinal"), stringIDToTypeID ("targetEnum"));
        desc1.putReference(stringIDToTypeID ("target"), ref);
    var desc2 = new ActionDescriptor ();
        desc2.putUnitDouble(stringIDToTypeID ("globalLightingAngle"), stringIDToTypeID ("angleUnit"), globalLightingAngle);
    if (typeof globalAltitude !== 'undefined') {
        desc2.putUnitDouble(stringIDToTypeID ("globalAltitude"), stringIDToTypeID ("angleUnit"), globalAltitude);
    }
        desc1.putObject(stringIDToTypeID ("to"), stringIDToTypeID ("globalAngle"), desc2);
        executeAction(stringIDToTypeID ("set"), desc1, DialogModes.NO);
}



////////////////////////////////////////////////////////////////////////////////
// PATH
////////////////////////////////////////////////////////////////////////////////


// TODO
function makeRectPath(x, y, width, height)

function makeRoundedRectPath(x, y, width, height, radius)

function makeEllipsePath(x, y, width, height)

function makePolygonPath(pointsArray)

function drawRect(x, y, width, height)

function drawRoundedRect(x, y, width, height, radius)

function drawEllipse(x, y, width, height)

function drawPolygon(pointsArray)

function drawLine(begin_x, begin_y, end_x, end_y, weight)

// rectangleRadius(all: Number)
// rectangleRadius(topleft_bottomright: Number, topright_bottomleft: Number)
// rectangleRadius(topleft: Number, topright_bottomleft: Number, bottomright: Number)
// rectangleRadius(topleft: Number, topright: Number, bottomright: Number, bottomleft: Number)
function rectangleRadius(topleft, topright, bottomright, bottomleft) {
    switch (arguments.length) {
        case 1:
            topleft = topright = bottomright = bottomleft = arguments[0];
            break;
        case 2:
            topleft = bottomright = arguments[0];
            topright = bottomleft = arguments[1];
            break;
        case 3:
            topleft = arguments[0];
            topright = bottomleft = arguments[1];
            bottomright = arguments[2];
            break;
        case 4:
            topleft = arguments[0];
            topright = arguments[1];
            bottomright = arguments[2];
            bottomleft = arguments[3];
            break;
    }
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
        desc1.putInteger(stringIDToTypeID("keyOriginType"), 1);
        desc2.putInteger(stringIDToTypeID("unitValueQuadVersion"), 1);
        desc2.putUnitDouble(stringIDToTypeID("topRight"), charIDToTypeID("#Pxl"), topright);
        desc2.putUnitDouble(stringIDToTypeID("topLeft"), charIDToTypeID("#Pxl"), topleft);
        desc2.putUnitDouble(stringIDToTypeID("bottomLeft"), charIDToTypeID("#Pxl"), bottomleft);
        desc2.putUnitDouble(stringIDToTypeID("bottomRight"), charIDToTypeID("#Pxl"), bottomright);
        desc1.putObject(stringIDToTypeID("keyOriginRRectRadii"), stringIDToTypeID("radii"), desc2);
    executeAction(stringIDToTypeID("changePathDetails"), desc1, DialogModes.NO);
}