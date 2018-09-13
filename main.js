function save(){
  text = document.getElementById("textarea").value;
  blob = new Blob([text], {type: "text/csv"});
  filename=document.getElementById("filename").value;
  filename = filename.substr(filename.length - 4) == ".txt" ? filename : filename + ".txt"; 
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement('a');
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0)
  }
}
