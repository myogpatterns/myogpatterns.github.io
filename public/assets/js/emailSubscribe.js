/*
    Benchmark Email Newsletter Subscription
  
*/

function CheckField1389444(fldName, frm) {
  var fldObj = document.getElementsByName(fldName);
  if (fldObj.length > 1) {
    for (var i = 0, l = fldObj.length; i < l; i++) {
      if (fldObj[0].type == "select-one") {
        if (fldObj[i].selected && i == 0 && fldObj[i].value == "") {
          return false;
        }
        if (fldObj[i].selected) {
          return true;
        }
      } else {
        if (fldObj[i].checked) {
          return true;
        }
      }
    }
    return false;
  } else {
    if (fldObj[0].type == "checkbox") {
      return fldObj[0].checked;
    } else if (fldObj[0].type == "radio") {
      return fldObj[0].checked;
    } else {
      fldObj[0].focus();
      return fldObj[0].value.length > 0;
    }
  }
}
function _doSubmit1389444(frm) {
  if (_checkSubmit1389444(frm)) {
    _doPost1389444(frm);
  }
}
function _doPost1389444(frm) {
  var f = document.createElement("form");
  f.setAttribute("accept-charset", "UTF-8");
  f.setAttribute("method", "post");
  f.setAttribute("action", "https://lb.benchmarkemail.com//code/lbform");
  var elms = document
    .getElementsByName("frmLB" + frm)[0]
    .getElementsByTagName("*");
  var ty = "";
  for (var ei = 0; ei < elms.length; ei++) {
    ty = elms[ei].type;
    if (
      ty == "hidden" ||
      ty == "text" ||
      (ty == "checkbox" && elms[ei].checked) ||
      (ty == "radio" && elms[ei].checked) ||
      ty == "textarea" ||
      ty == "select-one" ||
      ty == "button"
    ) {
      elm = elms[ei];
      var i = document.createElement("input");
      i.type = "hidden";
      i.name = elm.name.replace("_MW4UW", "");
      i.id = elm.id;
      i.value = elm.value;
      f.appendChild(i);
    }
  }
  document.getElementsByTagName("body")[0].appendChild(f);
  f.submit();
}
function rmspaces(x) {
  var leftx = 0;
  var rightx = x.length - 1;
  while (x.charAt(leftx) == " ") {
    leftx++;
  }
  while (x.charAt(rightx) == " ") {
    --rightx;
  }
  var q = x.substr(leftx, rightx - leftx + 1);
  if (leftx == x.length && rightx == -1) {
    q = "";
  }
  return q;
}
function checkfield(data) {
  if (rmspaces(data) == "") {
    return false;
  } else {
    return true;
  }
}
function isemail(data) {
  var flag = false;
  if (
    data.indexOf("@", 0) == -1 ||
    data.indexOf("\\", 0) != -1 ||
    data.indexOf("/", 0) != -1 ||
    !checkfield(data) ||
    data.indexOf(".", 0) == -1 ||
    data.indexOf("@") == 0 ||
    data.lastIndexOf(".") < data.lastIndexOf("@") ||
    data.lastIndexOf(".") == data.length - 1 ||
    data.lastIndexOf("@") != data.indexOf("@") ||
    data.indexOf(",", 0) != -1 ||
    data.indexOf(":", 0) != -1 ||
    data.indexOf(";", 0) != -1
  ) {
    return flag;
  } else {
    var temp = rmspaces(data);
    if (temp.indexOf(" ", 0) != -1) {
      flag = true;
    }
    var d3 = temp.lastIndexOf(".") + 4;
    var d4 = temp.substring(0, d3);
    var e2 = temp.length - temp.lastIndexOf(".") - 1;
    var i1 = temp.indexOf("@");
    if (temp.charAt(i1 + 1) == "." || e2 < 1) {
      flag = true;
    }
    return !flag;
  }
}
function _checkSubmit1389444(frm) {
  if (!CheckField1389444("fldfirstname_MW4UW", frm)) {
    alert("Please enter the First Name");
    return false;
  }
  if (!isemail(document.getElementsByName("fldEmail_MW4UW")[0].value)) {
    alert("Please enter the Email Address ");
    return false;
  }

  if (
    isemail(document.getElementsByName("fldEmail_MW4UW")[0].value) &&
    window &&
    window.JB_TRACKER &&
    typeof window.JB_TRACKER.jbSubmitForm === "function"
  ) {
    window.JB_TRACKER.jbSubmitForm({
      email: document.getElementsByName("fldEmail_MW4UW")[0].value,
      didSubmit: true,
    });
  }

  return true;
}
