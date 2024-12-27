function myFunction(){
    selectLength();
    document.getElementsByClassName("weight")[0].style.display="none";
    document.getElementsByClassName("temperature")[0].style.display="none";
}

function select(type, currentType){
    var set = {
        "length": {
            divs: "selectLength"},
        "weight": {
            divs: "selectWeight"
        },
        "temperature": {
            divs: "selectTemp"
        }
    }
    document.getElementById(set[currentType].divs).style.color = "blue";
    document.getElementById(set[currentType].divs).style["text-decoration"] = "underline";
    document.getElementById(set[currentType].divs).style["text-underline-position"] = "under";
    document.getElementsByClassName(currentType)[0].style.display="inline";
    if(type && type != '' && type != currentType){
        document.getElementById(set[type].divs).style.color = "black";
        document.getElementById(set[type].divs).style["text-decoration"] = "none";
        document.getElementById(set[type].divs).style["text-underline-position"] = "under";
        document.getElementsByClassName(type)[0].style.display="none";
    }
    document.getElementsByClassName("result")[0].style.display="none";
    document.getElementById("selected").innerHTML=currentType;
    document.getElementById("convert").style.display="inline";

}

function selectLength(){
   
    var type = document.getElementById("selected").innerHTML;
    select(type, "length");
    document.getElementById("lengthvalue").value = '';
    document.getElementById("fromLengthUnit").value = 'm';
    document.getElementById("toLengthUnit").value = 'm';


}

function selectWeight(){
    var type = document.getElementById("selected").innerHTML;
    select(type, "weight");
    document.getElementById("weightvalue").value = '';
    document.getElementById("fromWeigthhUnit").value = 'g';
    document.getElementById("toWeigthUnit").value = 'g';
}

function selectTemp(){
    var type = document.getElementById("selected").innerHTML;
    select(type, "temperature");
    document.getElementById("tempvalue").value = '';
    document.getElementById("fromTempUnit").value = 'c';
    document.getElementById("toTempUnit").value = 'c';
}

function convert(type){
    console.log(type)
    document.getElementsByClassName(type)[0].style.display="none";
    document.getElementsByClassName("result")[0].style.display="inline";
    document.getElementById("convert").style.display="none";
    var output = "output";
    var convertion = {
        'length': {
            'm': 1,
            'km': 1000,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'ft': 0.3048,
            'in': 0.0254
        },
        'weight': {
            'g': 1,
            'kg': 1000,
            'mg': 0.001,
            'tn': 1000000,
            'lbs': 453.592,
            'ou': 28.3495
        }
    }
    switch(type){
        case "length":
            var val = document.getElementById("lengthvalue").value;
            var fromUnit = document.getElementById("fromLengthUnit").value;
            var toUnit = document.getElementById("toLengthUnit").value;
            var out = val;
            if(fromUnit != toUnit){
                out = val*convertion[type][fromUnit]/convertion[type][toUnit]
            }
            output = val + " " + fromUnit + " = " + out + " " + toUnit;
            document.getElementById("reset").setAttribute("onclick", "selectLength()");
            break;
        case "weight":
            var val = document.getElementById("weightvalue").value;
            var fromUnit = document.getElementById("fromWeigthhUnit").value;
            var toUnit = document.getElementById("toWeigthUnit").value;
            var out = val;
            if(fromUnit != toUnit){
                out = val*convertion[type][fromUnit]/convertion[type][toUnit]
            }
            output = val + " " + fromUnit + " = " + out + " " + toUnit;
            document.getElementById("reset").setAttribute("onclick", "selectWeight()");
            break;
        case "temperature":
            var val = Number(document.getElementById("tempvalue").value);
            var fromUnit = document.getElementById("fromTempUnit").value;
            var toUnit = document.getElementById("toTempUnit").value;
            var out = val;
            if(fromUnit == 'k' && toUnit != 'k'){
                out = val - 273.15;
            }
            if(fromUnit == 'c' && toUnit == 'k'){
                out = val + 273.15;
            }
            if((fromUnit != 'f' )&& toUnit == 'f'){
                out = (out*9/5) + 32;
            }

            if(fromUnit == 'f' && toUnit != 'f'){
                out = (val-32)*5/9;
            }
            if(fromUnit == 'f' && toUnit == 'k'){
                out = out + 273.15;
            }
            output = val + " " + fromUnit + " = " + out + " " + toUnit;
            document.getElementById("reset").setAttribute("onclick", "selectTemp()");

    }
    document.getElementById("output").innerHTML=output;

}