function update() {
    let idoc = document.querySelector("#iframe").contentWindow.document
    idoc.open()
    idoc.write()
    idoc.write(editor.getValue())
    idoc.close()
}

function setupEditor() {
    window.editor = ace.edit("editor")
    editor.setTheme("ace/theme/monokai")
    editor.getSession().setMode(`ace/mode/html`)
    editor.setValue(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    `, 1)
    editor.getSession().on(`change`, function () {
        update()
    })
    edtor.focus()
    editor.setOptions({
        fontSize: "16pt",
        showLineNumbers: false,
        showGutter: false,
        vScrollBarAlwaysVisible: true,
        enableBasicAutoCompletetion: true,
        enableLiveAutocompletetion: false
    })
    editor.setShow.PrintMargin(false)
    editor.setBehavioursEnabled(false)
}




setupEditor()