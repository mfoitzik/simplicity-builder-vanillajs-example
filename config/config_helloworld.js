const config = {
	"license": "",
	"devKey": "MD9X_EFDR7A",
    "cleanupAttributes": ["data-settingsobj"],
    "cleanupIds": ["helloworld_utility"],
    "blockSections": [{
        "heading": "Content Editors",
        "blocks": [{
                "icon": "<img src=\"##BASEADDRESS##/templates/icons/file-text.svg\" />",
                "label": "Plain Text",
                "tooltipHeading": "Plain Text Block",
                "tooltipImage": "##BASEADDRESS##/templates/icons/plaintext-sample.png",
                "tooltipText": "Plain text editor that allows for text editing only. No HTML or formatting.",
                "dragImage": "##BASEADDRESS##/templates/icons/plaintext-sample.png",
                "html": encodeURIComponent(`<div data-sbblock="Plain  Text" data-sbzone="hovo" data-sbeditor="plaintext" style="width: 100%;">Plain Text</div>`)
            },
            {
                "icon": "<img src=\"##BASEADDRESS##/templates/icons/file-earmark-richtext.svg\" />",
                "label": "Rich Text",
                "tooltipHeading": "Rich Text Block",
                "tooltipImage": "##BASEADDRESS##/templates/icons/richtext-sample.png",
                "tooltipText": "The rich text editor allows for editing and formatting text, inserting images, linking, etc.",
                "dragImage": "##BASEADDRESS##/templates/icons/richtext-sample.png",
                "html": encodeURIComponent(`<div data-sbblock="Rich  Text" data-sbzone="hovo" data-sbeditor="richtext">Rich Text</div>`)
            },
            {
                "icon": "<img src=\"##BASEADDRESS##/templates/icons/code.svg\" />",
                "label": "Code",
                "tooltipHeading": "Code Block",
                "tooltipImage": "##BASEADDRESS##/templates/icons/code-sample.png",
                "tooltipText": "The code editor allows full access to the blocks inner HTML. Inline scripting can be input by the user.",
                "dragImage": "##BASEADDRESS##/templates/icons/code-sample.png",
                "html": encodeURIComponent(`<div data-sbblock="Code" data-sbzone="hovo" data-sbeditor="code">Code</div>`)
            }
        ]},
        {"heading": "Shapes",
        "blocks":[
            {
                "icon": "<img src=\"##BASEADDRESS##/sbassets/blocks/shapes_circle/circle.svg\" />",
                "label": "Circle Shape",
                "tooltipHeading": "Circle Shape",
                "tooltipImage": "##BASEADDRESS##/sbassets/blocks/shapes_circle/circle-sample.jpg",
                "tooltipText": "Simple circle shape for demonstration.",
                "dragImage": "##BASEADDRESS##/sbassets/blocks/shapes_circle/circle-sample.jpg",
                "html": encodeURIComponent(`<div data-sbblock="Circle Shape" data-sbzone="ho" class="wrapper" data-sbsettings="ae1" data-settingsobj='{"displaytext":"This is a circle:", "circlecolor":"#008800"}' data-circle='{"align":"left", "border":false}'>
                <h1>This is a circle:</h1>    
                <div class="cwrap">
                    <div class="circle borderoff"></div>
                </div>
                <p>This is a long description of a circle...</p>
                </div>`)
            }
            ]
        }
        
    ],
    "imageSelections": [],
    "attributeEditors": [
        {
            "id":"ae1",
            "editorHeading": "Circle Attributes",
            "mode": "constant",
            "callback": "circleFunction",
            "controlSections": [
                {
                    "heading": "Section 1",
                    "type": "object",
                    "target": "data-settingsobj",
                    "controls": [
                        {
                            "heading": "Circle Heading Text",
                            "type": "text",
                            "mode": "text",
                            "attribute": "displaytext",
                            "value": "This is a circle:"
                        },
                        {
                            "heading": "Circle Color",
                            "type": "color",
                            "attribute": "circlecolor",
                            "value": "#008800"
                        }
                    ]
                },
                {
                    "heading": "Circle Settings",
                    "type": "object",
                    "target": "data-circle",
                    "controls": [
                        {
                            "heading": "Circle Align",
                            "type": "select",
                            "attribute": "align",
                            "value": "",
                            "selections": ["left", "center", "right"]
                        },
                        {
                            "heading": "Show Border",
                            "type": "toggle",
                            "attribute": "border",
                            "mode": "bool",
                            "value": false
                        }
                    ]
                }
            ]
        }
    ]
}

function getConfigHelloWorld() {
	return config;
}
export default getConfigHelloWorld;