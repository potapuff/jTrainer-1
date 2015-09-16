HistrixCalculator=new Object,HistrixCalculator.stringDis="0",HistrixCalculator.numDis=0,HistrixCalculator.pila=new Array,HistrixCalculator.lastNumAct=null,HistrixCalculator.lastNumAnt=null,HistrixCalculator.lastOp=null,HistrixCalculator.mem=null,HistrixCalculator.writingFlag=!1,HistrixCalculator.exponentialFlag=!1,HistrixCalculator.init=function(){jQuery("#HistrixCalculator select[name='mode']").change(function(){"standard"==jQuery(this).val()?(jQuery("#HistrixCalculator .standard").show(),jQuery("#HistrixCalculator .scientific").hide(),jQuery("#HistrixCalculator").width(240),jQuery("#HistrixCalculator div.right").width(240),jQuery("#HistrixCalculator .stadistic").attr("disabled",!0),jQuery("#HistrixCalculator .stadistic").css("color","#a0a0a0"),jQuery("#HistrixCalculator_stadistics").hide()):(jQuery("#HistrixCalculator .scientific").show(),jQuery("#HistrixCalculator .standard").hide(),jQuery("#HistrixCalculator").width(470),jQuery("#HistrixCalculator div.right").width(280))}),jQuery("#HistrixCalculator select[name='mode']").change(),jQuery("#HistrixCalculator input[name='base']").change(function(){jQuery(this).attr("checked")&&(jQuery("#HistrixCalculator .up .hexadecimal").hide(),jQuery("#HistrixCalculator .up .decimal").hide(),jQuery("#HistrixCalculator .up .octal").hide(),jQuery("#HistrixCalculator .up .binary").hide(),jQuery("#HistrixCalculator .up ."+jQuery(this).val()).show(),jQuery("#HistrixCalculator .down .hexadecimal").attr("disabled",!0),jQuery("#HistrixCalculator .down .hexadecimal").css("color","#a0a0a0"),jQuery("#HistrixCalculator .down .decimal").attr("disabled",!0),jQuery("#HistrixCalculator .down .decimal").css("color","#a0a0a0"),jQuery("#HistrixCalculator .down .octal").attr("disabled",!0),jQuery("#HistrixCalculator .down .octal").css("color","#a0a0a0"),jQuery("#HistrixCalculator .down .binary").attr("disabled",!0),jQuery("#HistrixCalculator .down .binary").css("color","#a0a0a0"),jQuery("#HistrixCalculator .down ."+jQuery(this).val()).removeAttr("disabled"),jQuery("#HistrixCalculator .down ."+jQuery(this).val()).removeAttr("style"),HistrixCalculator.display.update(),HistrixCalculator.display.refresh(),HistrixCalculator.numDis=HistrixCalculator.display.parse(HistrixCalculator.stringDis))}),jQuery("#HistrixCalculator input[name='base']").change(),jQuery("#HistrixCalculator a.button").click(function(){return("undefined"==typeof jQuery(this).attr("disabled")||0==jQuery(this).attr("disabled")||"false"==jQuery(this).attr("disabled"))&&HistrixCalculator.action(jQuery(this).html()),!1}),jQuery("#HistrixCalculator input.display").get(0).onkeypress=function(t){var i=HistrixCalculator.getKeyPress(t),a="";switch(i){case 13:a="=";break;default:a=String.fromCharCode(i)}return HistrixCalculator.action(a),!1},jQuery("#HistrixCalculator input.display").get(0).onkeyup=function(t){var i=HistrixCalculator.getKeyPress(t);return 8==i&&HistrixCalculator.action("Backspace"),!1},HistrixCalculator.display.refresh(),jQuery("#HistrixCalculator .square input").focus(function(){jQuery("#HistrixCalculator input.display").focus()}),jQuery("#HistrixCalculator .stadistic").attr("disabled",!0),jQuery("#HistrixCalculator .stadistic").css("color","#a0a0a0"),jQuery("#HistrixCalculator_stadistics").hide(),jQuery("#HistrixCalculator_stadistics button[name='ret']").click(function(){return jQuery("#HistrixCalculator input.display").focus(),!1}),jQuery("#HistrixCalculator_stadistics button[name='load']").click(function(){var t=jQuery("#HistrixCalculator_stadistics option.stadistic_value:selected");return jQuery(t).size()>0&&(HistrixCalculator.push(parseFloat(jQuery(t).attr("num"))),HistrixCalculator.display.refresh()),!1}),jQuery("#HistrixCalculator_stadistics button[name='cd']").click(function(){return jQuery("#HistrixCalculator_stadistics option.stadistic_value:selected").remove(),!1}),jQuery("#HistrixCalculator_stadistics button[name='cad']").click(function(){return jQuery("#HistrixCalculator_stadistics option.stadistic_value").remove(),!1})},HistrixCalculator.getKeyPress=function(t){var i;return window.event?i=window.event.keyCode:t&&(i=t.which),i},HistrixCalculator.getMetric=function(){return jQuery("#HistrixCalculator input[name='metric']:checked").val()},HistrixCalculator.getBase=function(){return jQuery("#HistrixCalculator input[name='base']:checked").val()},HistrixCalculator.getRange=function(){return jQuery("#HistrixCalculator input[name='range']:checked").val()},HistrixCalculator.isInv=function(){return jQuery("#HistrixCalculator input[name='inv']").attr("checked")},HistrixCalculator.setInv=function(t){t?jQuery("#HistrixCalculator input[name='inv']").attr("checked",!0):jQuery("#HistrixCalculator input[name='inv']").removeAttr("checked")},HistrixCalculator.isHyp=function(){return jQuery("#HistrixCalculator input[name='hyp']").attr("checked")},HistrixCalculator.setHyp=function(t){t?jQuery("#HistrixCalculator input[name='hyp']").attr("checked",!0):jQuery("#HistrixCalculator input[name='hyp']").removeAttr("checked")},HistrixCalculator.action=function(t){HistrixCalculator.numDis=HistrixCalculator.display.parse(HistrixCalculator.stringDis),HistrixCalculator.handleAction(t),HistrixCalculator.display.refresh(),HistrixCalculator.numDis=HistrixCalculator.display.parse(HistrixCalculator.stringDis);var i=HistrixCalculator.countOcurrences("(");jQuery("#HistrixCalculator input[name='par']").val(0==i?"":"(="+i),jQuery("#HistrixCalculator input.display").focus()},HistrixCalculator.clearDisplay=function(){HistrixCalculator.push(0),HistrixCalculator.numDis=0,HistrixCalculator.stringDis="0"},HistrixCalculator.clearAll=function(){HistrixCalculator.pila=new Array,HistrixCalculator.numDis=0,HistrixCalculator.stringDis="0",HistrixCalculator.lastNumAct=null,HistrixCalculator.lastNumAnt=null,HistrixCalculator.lastOp=null},HistrixCalculator.handleAction=function(t){HistrixCalculator.isSimbol(t)&&HistrixCalculator.handleSimbol(t),("CA"==t||"CE"==t||"Backspace"==t)&&HistrixCalculator.handleDelete(t),HistrixCalculator.math.isUnaryOperator(t)&&HistrixCalculator.handleUnaryOperator(t),HistrixCalculator.math.isBinaryOperator(t)&&HistrixCalculator.handleBinaryOperator(t),"="==t&&HistrixCalculator.handleEquals(t),HistrixCalculator.isMemoryAction(t)&&HistrixCalculator.handleMemory(t),"pi"==t&&HistrixCalculator.handleConstant(t),HistrixCalculator.isStadisticAction(t)&&HistrixCalculator.handleStadistic(t),("("==t||")"==t)&&HistrixCalculator.push(t),HistrixCalculator.isSimbol(t)?HistrixCalculator.writingFlag=!0:"Backspace"!=t&&"+/-"!=t&&(HistrixCalculator.writingFlag=!1),"F-E"==t&&(HistrixCalculator.exponentialFlag=!HistrixCalculator.exponentialFlag,HistrixCalculator.display.update())},HistrixCalculator.handleSimbol=function(t){1!=HistrixCalculator.writingFlag&&HistrixCalculator.clearDisplay(),HistrixCalculator.display.add(t),HistrixCalculator.push(HistrixCalculator.display.parse(HistrixCalculator.stringDis),!1)},HistrixCalculator.isSimbol=function(t){return"0"==t||"1"==t||"2"==t||"3"==t||"4"==t||"5"==t||"6"==t||"7"==t||"8"==t||"9"==t||"A"==t||"B"==t||"C"==t||"D"==t||"E"==t||"F"==t||"."==t||"Exp"==t||HistrixCalculator.writingFlag&&"+/-"==t},HistrixCalculator.handleDelete=function(t){if("CA"==t&&HistrixCalculator.clearAll(),"CE"==t&&HistrixCalculator.clearDisplay(),"Backspace"==t&&HistrixCalculator.writingFlag){for(var i=!0,a=HistrixCalculator.stringDis;i;)if(null==a||a.length<=1)a="0",i=!1;else{var r=a.substring(a.length-1,a.length);a=a.substring(0,a.length-1),","!=r&&" "!=r&&"-"!=a&&(i=!1)}HistrixCalculator.stringDis=a,HistrixCalculator.push(HistrixCalculator.display.parse(HistrixCalculator.stringDis),!1)}},HistrixCalculator.handleMemory=function(t){"MR"==t&&null!=HistrixCalculator.mem&&HistrixCalculator.push(HistrixCalculator.mem),"MS"==t&&(HistrixCalculator.mem=HistrixCalculator.numDis),"MC"==t&&(HistrixCalculator.mem=null),"M+"==t&&(null==HistrixCalculator.mem&&(HistrixCalculator.mem=0),HistrixCalculator.mem+=HistrixCalculator.numDis),jQuery("#HistrixCalculator input[name='mem']").val(null==HistrixCalculator.mem?"":"M")},HistrixCalculator.isMemoryAction=function(t){return"MR"==t||"MC"==t||"MS"==t||"M+"==t},HistrixCalculator.handleUnaryOperator=function(t){var i=HistrixCalculator.getNumAnt(),a=HistrixCalculator.math.unaryOperation(i,HistrixCalculator.numDis,t);HistrixCalculator.push(a)},HistrixCalculator.handleBinaryOperator=function(t){HistrixCalculator.push(t)},HistrixCalculator.handleEquals=function(){HistrixCalculator.executePendingOperations()?HistrixCalculator.display.update(HistrixCalculator.top()):HistrixCalculator.executeLastOperation()},HistrixCalculator.handleConstant=function(t){"pi"==t&&HistrixCalculator.push(Math.PI)},HistrixCalculator.handleStadistic=function(t){var i=jQuery("#HistrixCalculator_stadistics option.stadistic_value").size();if("Sta"==t&&(jQuery("#HistrixCalculator_stadistics").is(":hidden")?(jQuery("#HistrixCalculator .stadistic").attr("disabled",!1),jQuery("#HistrixCalculator .stadistic").removeAttr("style"),jQuery("#HistrixCalculator_stadistics").show()):(jQuery("#HistrixCalculator .stadistic").attr("disabled",!0),jQuery("#HistrixCalculator .stadistic").css("color","#a0a0a0"),jQuery("#HistrixCalculator_stadistics").hide())),"Ave"==t||"Sum"==t){var a=0;HistrixCalculator.isInv()?(jQuery("#HistrixCalculator_stadistics option.stadistic_value").each(function(){var t=parseFloat(jQuery(this).attr("num"));a+=t*t}),HistrixCalculator.setInv(!1)):jQuery("#HistrixCalculator_stadistics option.stadistic_value").each(function(){var t=parseFloat(jQuery(this).attr("num"));a+=t}),"Ave"==t&&(a/=i),HistrixCalculator.push(a)}if("s"==t&&i>0){var r=i-1;HistrixCalculator.isInv()&&(r++,HistrixCalculator.setInv(!1)),0>=r&&(r=1);var l=0;jQuery("#HistrixCalculator_stadistics option.stadistic_value").each(function(){l+=parseFloat(jQuery(this).attr("num"))}),l/=i;var s=0;jQuery("#HistrixCalculator_stadistics option.stadistic_value").each(function(){var t=parseFloat(jQuery(this).attr("num"))-l;s+=t*t}),s=Math.sqrt(s/r),HistrixCalculator.push(s)}if("Dat"==t){var u='<option class="stadistic_value" value="'+(i+1)+'" num="'+HistrixCalculator.numDis+'">'+HistrixCalculator.stringDis+"</option>";jQuery("#HistrixCalculator_stadistics select[name='datos']").prepend(u)}},HistrixCalculator.isStadisticAction=function(t){return"Sta"==t||"Ave"==t||"Sum"==t||"s"==t||"Dat"==t},HistrixCalculator.push=function(t,i){(null==i||"boolean"!=typeof i)&&(i=!0),"number"==typeof t&&(HistrixCalculator.pila.length>0&&"number"==typeof HistrixCalculator.pila[HistrixCalculator.pila.length-1]?HistrixCalculator.pila[HistrixCalculator.pila.length-1]=t:HistrixCalculator.pila.push(t),i&&HistrixCalculator.display.update(HistrixCalculator.top())),"string"==typeof t&&(HistrixCalculator.math.isBinaryOperator(t)&&HistrixCalculator.pila.length>0&&(HistrixCalculator.math.isBinaryOperator(HistrixCalculator.pila[HistrixCalculator.pila.length-1])?HistrixCalculator.pila[HistrixCalculator.pila.length-1]=t:("number"==typeof HistrixCalculator.pila[HistrixCalculator.pila.length-1]||")"==HistrixCalculator.pila[HistrixCalculator.pila.length-1])&&(HistrixCalculator.executePendingOperations()&&i&&HistrixCalculator.display.update(HistrixCalculator.top()),HistrixCalculator.pila.push(t))),"("==t&&(0==HistrixCalculator.pila.length||"("==HistrixCalculator.top()||HistrixCalculator.math.isBinaryOperator(HistrixCalculator.top()))&&HistrixCalculator.pila.push(t),")"==t&&!HistrixCalculator.math.isBinaryOperator(HistrixCalculator.top())&&HistrixCalculator.countOcurrences("(")>0&&HistrixCalculator.executePendingOperations(")")&&i&&HistrixCalculator.display.update(HistrixCalculator.top()))},HistrixCalculator.top=function(){return HistrixCalculator.pila.length>0?HistrixCalculator.pila[HistrixCalculator.pila.length-1]:null},HistrixCalculator.getNumAnt=function(){return HistrixCalculator.pila.length>=2&&"number"==typeof HistrixCalculator.pila[HistrixCalculator.pila.length-2]?HistrixCalculator.pila[HistrixCalculator.pila.length-2]:HistrixCalculator.pila.length>=3&&"number"==typeof HistrixCalculator.pila[HistrixCalculator.pila.length-3]?HistrixCalculator.pila[HistrixCalculator.pila.length-3]:0},HistrixCalculator.countOcurrences=function(t){for(var i=0,a=0;a<HistrixCalculator.pila.length;a++)HistrixCalculator.pila[a]==t&&i++;return i},HistrixCalculator.executePendingOperations=function(t){var i=!1,a=HistrixCalculator.pila.length;if(null==t||")"!=t){if(a>=3&&"number"==typeof HistrixCalculator.pila[a-1]&&"string"==typeof HistrixCalculator.pila[a-2]&&HistrixCalculator.math.isBinaryOperator(HistrixCalculator.pila[a-2])&&"number"==typeof HistrixCalculator.pila[a-3]){var r=HistrixCalculator.pila.pop(),l=HistrixCalculator.pila.pop(),s=HistrixCalculator.pila.pop(),u=HistrixCalculator.math.binaryOperation(s,r,l);HistrixCalculator.pila.push(u),i=!0}}else{for(var o=null,e=a-1;null==o&&e>=0;)"("==HistrixCalculator.pila[e]&&(o=e),e--;if(null!=o){var c=a-1-o;if(0==c&&HistrixCalculator.pila.pop(),1==c){var n=HistrixCalculator.pila.pop();HistrixCalculator.pila.pop(),HistrixCalculator.pila.push(n)}if(3==c){var x=HistrixCalculator.pila.pop(),C=HistrixCalculator.pila.pop(),H=HistrixCalculator.pila.pop();if(HistrixCalculator.pila.pop(),"number"==typeof x&&"string"==typeof C&&HistrixCalculator.math.isBinaryOperator(C)&&"number"==typeof H){var p=HistrixCalculator.math.binaryOperation(H,x,C);HistrixCalculator.pila.push(p),i=!0}}}}return i},HistrixCalculator.executeLastOperation=function(){if(null!=HistrixCalculator.numDis&&null!=HistrixCalculator.lastNumAct&&null!=HistrixCalculator.lastOp){var t=HistrixCalculator.math.binaryOperation(HistrixCalculator.numDis,HistrixCalculator.lastNumAct,HistrixCalculator.lastOp);HistrixCalculator.push(t)}},HistrixCalculator.math=new Object,HistrixCalculator.math.unaryOperation=function(t,i,a){if("+/-"==a)return-i;if("sqrt"==a)return Math.sqrt(i);if("%"==a)return 0!=t&&null!=t?i*t/100:i;if("1/x"==a&&0!=i)return 1/i;if("Not"==a)return-(i+1);if("Int"==a){if(HistrixCalculator.isInv()){for(HistrixCalculator.setInv(!1);i>1;)i--;return i}return parseInt(i,10)}if("sin"==a||"cos"==a||"tan"==a)if(HistrixCalculator.isHyp())if(HistrixCalculator.setHyp(!1),HistrixCalculator.isInv()){if(HistrixCalculator.setInv(!1),"sin"==a)return HistrixCalculator.math.asinh(i);if("cos"==a)return HistrixCalculator.math.acosh(i);if("tan"==a)return HistrixCalculator.math.atanh(i)}else{if("sin"==a)return HistrixCalculator.math.sinh(i);if("cos"==a)return HistrixCalculator.math.cosh(i);if("tan"==a)return HistrixCalculator.math.tanh(i)}else{var r=HistrixCalculator.getMetric();if(HistrixCalculator.isInv())return HistrixCalculator.setInv(!1),"sin"==a&&(i=Math.asin(i)),"cos"==a&&(i=Math.acos(i)),"tan"==a&&(i=Math.atan(i)),"degrees"==r?180*i/Math.PI:"grads"==r?200*i/Math.PI:i;if("degrees"==r&&(i=i/180*Math.PI),"grads"==r&&(i=i/200*Math.PI),"sin"==a)return Math.sin(i);if("cos"==a)return Math.cos(i);if("tan"==a)return Math.tan(i)}if("x^2"==a)return HistrixCalculator.isInv()?(HistrixCalculator.setInv(!1),Math.pow(i,.5)):Math.pow(i,2);if("x^3"==a)return HistrixCalculator.isInv()?(HistrixCalculator.setInv(!1),Math.pow(i,1/3)):Math.pow(i,3);if("n!"==a){for(var l=1;i>1;)l*=i,i--;return l}if("log"==a)return HistrixCalculator.isInv()?(HistrixCalculator.setInv(!1),Math.pow(10,i)):Math.log(i)/Math.log(10);if("ln"==a)return HistrixCalculator.isInv()?(HistrixCalculator.setInv(!1),Math.pow(Math.E,i)):Math.log(i);if("dms"==a){if(HistrixCalculator.isInv()){HistrixCalculator.setInv(!1);var s=parseInt(1e4*(i-parseInt(i,10)),10),u=parseInt(s/100,10),o=s%100;return i=parseInt(i,10),i+parseFloat(u)/60+parseFloat(o)/3600}var e=i-parseInt(i,10),c=6e3*e;i=parseInt(i,10);var n=parseInt(c/100,10),x=60*(c%100)/100;return i+parseFloat(n)/100+parseFloat(x)/1e4}return 0},HistrixCalculator.math.isUnaryOperator=function(t){return"sqrt"==t||"%"==t||"1/x"==t||"Not"==t||"sin"==t||"cos"==t||"tan"==t||"x^2"==t||"x^3"==t||"n!"==t||"log"==t||"ln"==t||"Int"==t||"dms"==t||!HistrixCalculator.writingFlag&&"+/-"==t},HistrixCalculator.math.binaryOperation=function(t,i,a){if(null!=a){if("+"==a)return t+i;if("-"==a)return t-i;if("*"==a)return t*i;if("/"==a&&0!=i)return t/i;if("And"==a)return t&i;if("Or"==a)return t|i;if("Xor"==a)return t^i;if("Mod"==a)return t%i;if("x^y"==a)return HistrixCalculator.isInv()?(HistrixCalculator.setInv(!1),Math.pow(t,1/i)):Math.pow(t,i);if("Lsh"==a)return t=parseInt(t,10),i=Math.pow(2,parseInt(i,10)),HistrixCalculator.isInv()?(HistrixCalculator.setInv(!1),parseInt(t/i,10)):t*i}return 0},HistrixCalculator.math.isBinaryOperator=function(t){return"+"==t||"-"==t||"*"==t||"/"==t||"x^y"==t||"Mod"==t||"Lsh"==t||"And"==t||"Or"==t||"Xor"==t},HistrixCalculator.math.operatorPriority=function(t){var i=2;return("+"==t||"-"==t||"Or"==t||"Xor"==t)&&(i=1),"("==t&&(i=0),i},HistrixCalculator.math.sinh=function(t){return(Math.exp(t)-Math.exp(-t))/2},HistrixCalculator.math.cosh=function(t){return(Math.exp(t)+Math.exp(-t))/2},HistrixCalculator.math.tanh=function(t){return HistrixCalculator.sinh(t)/HistrixCalculator.cosh(t)},HistrixCalculator.math.asinh=function(t){return Math.log(t+Math.sqrt(t*t+1))},HistrixCalculator.math.acosh=function(t){return Math.log(t+Math.sqrt(t*t-1))},HistrixCalculator.math.atanh=function(t){return Math.log((1+t)/(1-t))/2},HistrixCalculator.display=new Object,HistrixCalculator.display.refresh=function(){jQuery("#HistrixCalculator input.display").val(HistrixCalculator.stringDis)},HistrixCalculator.display.update=function(t){null!=t&&"number"==typeof t&&(HistrixCalculator.numDis=t),HistrixCalculator.stringDis=HistrixCalculator.display.format(HistrixCalculator.numDis)},HistrixCalculator.display.add=function(t){var i=HistrixCalculator.getBase(),a=2,r=HistrixCalculator.getRange();if("word"==r&&(a=4),"dword"==r&&(a=8),"qword"==r&&(a=16),"octal"==i&&(a=2*a),"binary"==i&&(a=4*a),HistrixCalculator.stringDis=HistrixCalculator.display.removeSeparators(HistrixCalculator.stringDis),"0"!=t&&"1"!=t&&("2"!=t&&"3"!=t&&"4"!=t&&"5"!=t&&"6"!=t&&"7"!=t||"octal"!=i&&"decimal"!=i&&"hexadecimal"!=i)&&("8"!=t&&"9"!=t||"decimal"!=i&&"hexadecimal"!=i)&&("A"!=t&&"B"!=t&&"C"!=t&&"D"!=t&&"E"!=t&&"F"!=t||"hexadecimal"!=i)||("0"!=HistrixCalculator.stringDis?("decimal"==i||HistrixCalculator.stringDis.length<a)&&(HistrixCalculator.stringDis=HistrixCalculator.stringDis+t):HistrixCalculator.stringDis=t),"Exp"==t&&HistrixCalculator.stringDis.indexOf("e")<=0&&(HistrixCalculator.stringDis=HistrixCalculator.stringDis+"e"),"+/-"==t&&HistrixCalculator.stringDis.indexOf("e")<0&&(HistrixCalculator.stringDis=HistrixCalculator.stringDis.indexOf("-")<=0&&"0"!=HistrixCalculator.stringDis?"-"+HistrixCalculator.stringDis:HistrixCalculator.stringDis.subtring(1,HistrixCalculator.stringDis.length)),"+/-"==t&&HistrixCalculator.stringDis.indexOf("e")>=0){var l=HistrixCalculator.stringDis.split("e")[0],s=HistrixCalculator.stringDis.split("e")[1];s=s.length>0&&"-"==s.substring(0,1)?s.substring(1,s.length):"-"+s,HistrixCalculator.stringDis=l+"e"+s}"."==t&&"decimal"==i&&HistrixCalculator.stringDis.indexOf(".")<=0&&(HistrixCalculator.stringDis=HistrixCalculator.stringDis+"."),HistrixCalculator.stringDis=HistrixCalculator.display.insertSeparators(HistrixCalculator.stringDis)},HistrixCalculator.display.format=function(t){var i="",a=0>t;a&&(t=-t);var r=HistrixCalculator.getBase();if("binary"==r&&(r=2),"octal"==r&&(r=8),"decimal"==r&&(r=10),"hexadecimal"==r&&(r=16),10==r)i=HistrixCalculator.exponentialFlag?t.toExponential():t.toString(),i=HistrixCalculator.display.insertSeparators(i);else{t=parseInt(t,10);var l=HistrixCalculator.getRange();"byte"==l&&(l=256),"word"==l&&(l=65535),"dword"==l&&(l=4294967295),"qword"==l&&(l=0x10000000000000000),!isNaN(l)&&(t>l||-l>t)&&(t%=l),i=t.toString(r),i=HistrixCalculator.display.insertSeparators(i)}return a&&(i="-"+i),i},HistrixCalculator.display.removeSeparators=function(t){for(;t.indexOf(" ")>=0;)t=t.replace(" ","");for(;t.indexOf(",")>=0;)t=t.replace(",","");return t},HistrixCalculator.display.insertSeparators=function(t){var i="",a=HistrixCalculator.getBase(),r="-"==t.substring(0,1);r&&(t=t.substring(1,t.length));var l=null;t.indexOf("e")>=0&&(l=t.split("e")[1],t=t.split("e")[0],"."==t.substring(0,1)&&(t="0"+t));var s=t,u=null;if(s.indexOf(".")>0&&(u=s.split(".")[1],s=s.split(".")[0]),"decimal"==a){for(var o=0,e=new Array;s.length>3;)e[o]=s.substring(s.length-3,s.length),s=s.substring(0,s.length-3),o++;for(var c=1;o>=c;c++)s+=","+e[o-c];i=null!=u?s+"."+u:s}else{for(var n=0,x=new Array;s.length>4;)x[n]=s.substring(s.length-4,s.length),s=s.substring(0,s.length-4),n++;for(var C=1;n>=C;C++)s+=" "+x[n-C];i=s}return r&&(i="-"+i),null!=l&&(i=i+"e"+l),i},HistrixCalculator.display.parse=function(t){t=HistrixCalculator.display.removeSeparators(t);var i=HistrixCalculator.getBase();return"binary"==i&&(i=2),"octal"==i&&(i=8),"decimal"==i&&(i=10),"hexadecimal"==i&&(i=16),10==i?parseFloat(t,10):parseInt(t,i)};
$(document).ready(function () {
	$("#calc").click(function() {
		
		jQuery.getScript("/javascripts/jtrainer/current/js/jquery-sizzle.js")
			.done(function() {
				$('div.calculator').load('/javascripts/jtrainer/current/calc.html').css('display', 'block');
			})
			.fail(function() {
				Cogwheel.setText("Error loading calc, please restart!");
				Cogwheel.show();
			});
	});
    $(function() {
		$( "#calculator" ).draggable();
	});
});