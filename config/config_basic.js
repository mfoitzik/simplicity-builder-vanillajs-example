const twoColBlock = `<section class="twocol" data-sbblock="Two Column Section" data-sbsettings="1" data-sbzone="ho" data-parameters='{"leftWidth":"50%","leftColor":"#fbe4c4ff","rightColor":"#b8e1e7ff","gap":"2rem","gapLineWidth":"2px","gapLineColor":"#394f87ff","columnPadding":"1rem","minHeight":"100%","bottomMargin":"1rem"}' data-styleid="twocolumn-stylevars">
<h2 class="twocol-heading" data-sbblock="Heading" data-heading="h2" data-sbeditor="plaintext" data-sbsettings="4">Two-Column Section Heading</h2>
<div class="twocol-left" data-sbblock="Rich Text" data-sbeditor="richtext">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere maxime reprehenderit consectetur saepe, ea iusto nam? Nihil, totam sapiente!</p>
</div>
<div class="twocol-right" data-sbblock="Rich Text" data-sbeditor="richtext">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde libero enim molestias amet obcaecati atque voluptas recusandae aspernatur incidunt.</p>
</div>
</section>
<style id="twocolumn-stylevars">
  :root {
      --twocol-leftside-width: 1fr;
      --twocol-leftside-backgroundColor: #fbe4c4;
      --twocol-rightside-width: 1fr;
      --twocol-rightside-backgroundColor: #b8e1e7;
      --twocol-gap: 2rem;
      --twocol-gap-line-width: 2px;
      --twocol-gap-line-color: #394f87;
      --twocol-padding: 1rem;
      --twocol-min-height: 100%;
      --twocol-margin-bottom: 1rem;
  }
  .twocol {
      display: grid;padding-bottom:20px;
      grid-template-columns: var(--twocol-leftside-width) var(--twocol-rightside-width);
      grid-template-rows: auto 1fr;
      min-height:var(--twocol-min-height);
      column-gap: var(--twocol-gap);
      box-sizing:border-box;
      position:relative;
      margin-bottom: var(--twocol-margin-bottom);
  }
  .twocol-heading {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 3;
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
  .twocol-left {
      background-color: var(--twocol-leftside-backgroundColor);
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
      padding: var(--twocol-padding);
      position: relative;
  }
  .twocol-left:after {
      content:"";
      position:absolute;
      top:0;
      right:calc(((var(--twocol-gap) / 2) * -1) - (var(--twocol-gap-line-width) /2));
      height:100%;
      width:var(--twocol-gap-line-width);
      background:var(--twocol-gap-line-color);
  }
  .twocol-right {
      background-color:var(--twocol-rightside-backgroundColor);
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      padding: var(--twocol-padding);
  }
  @media (max-width:780px) {
      main {
          margin-left:.5rem;
          margin-right:.5rem;
      }
      .twocol {
          column-gap: 0;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          row-gap: 2rem;
      }
      .twocol-heading {
          grid-row-start: 1;
          grid-row-end: 2;
          margin-top: 1rem;
          margin-bottom: 1rem;
      }
      .twocol-left {
          grid-column-start: 1;
          grid-column-end: 3;
          position:relative;
          margin-top:-2rem;
      }
      .twocol-left:after {
          content:"";
          position:absolute;
          top:calc(100% + (var(--twocol-gap) / 2) - (var(--twocol-gap-line-width) /2));
          left:0;
          height:var(--twocol-gap-line-width);
          width:100%;
          background:var(--twocol-gap-line-color);
      }
      .twocol-right {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 4;
      }
  }
</style>

`;

const config = {
	"helpUrl": "",
	"assetsLocation": "##BASEADDRESS##/external/assets",
	"license": "B4A110b7e96dd71e77917d6b1523b94b6eaa79933d2a2879561b9e8",
	"devKey": "MD9X_EFDR7A",
	"themeColor": "#136853",
	"themeDarkColor": "#0e4337",
	"cleanupIds": ["scriptSbUtility"],
	"cleanupStrings": ["https://www.simplicityblocks.com/", "https://www.mifo.com/"],
	"cleanupAttributes": ["data-custom1", "data-custom2"],
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
			]
		},
		{
			"heading": "Headings",
			"blocks": [{
				"icon": "<img src=\"##BASEADDRESS##/templates/icons/type-h1.svg\" />",
				"label": "Heading",
				"tooltipHeading": "HTML Heading",
				"tooltipImage": "##BASEADDRESS##/templates/icons/HeadingBlockImage.png",
				"tooltipText": "An HTML heading that can be configured from H1 through H6. Defaults to H1.",
				"dragImage": "##BASEADDRESS##/templates/icons/HeadingBlockImage.png",
				"html": encodeURIComponent(`<h1 data-sbblock="Heading" data-sbzone="ho" data-sbeditor="plaintext" data-sbsettings="4" data-heading="h1">Heading Text</h1>`)
			}]
		},
		{
			"heading": "Inner Layouts",
			"blocks": [{
				"icon": "<img src=\"##BASEADDRESS##/templates/icons/layout-split.svg\" />",
				"label": "2-Col Layout",
				"tooltipHeading": "Two Column Layout",
				"tooltipImage": "##BASEADDRESS##/templates/icons/TwoColumnBlockImage.png",
				"tooltipText": "A responsive two-column layout. Can be used to fill an entire page or as a section of a page.",
				"dragImage": "##BASEADDRESS##/templates/icons/TwoColumnBlockImage.png",
				"html": encodeURIComponent(twoColBlock)
			}]
		}

	],
	"imageSelections": [{
			"url": "##BASEADDRESS##/templates/editorimages/image1.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image1_tn.jpg"
		},
		{
			"url": "##BASEADDRESS##/templates/editorimages/image2.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image2_tn.jpg"
		},
		{
			"url": "##BASEADDRESS##/templates/editorimages/image3.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image3_tn.jpg"
		},
		{
			"url": "##BASEADDRESS##/templates/editorimages/image4.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image4_tn.jpg"
		}
	],
	"attributeEditors": [{
			"id": "1",
			"editorName": "twocolatts",
			"editorHeading": "Two Column Section Settings",
			"mode": "constant",
			"callback": "changeCssVariableValue",
			"controlSections": [{
				"heading": "Settings",
				"type": "object",
				"target": "data-parameters",
				"controls": [{
						"heading": "Left Side Width",
						"type": "slider",
						"attribute": "leftWidth",
						"value": 1,
						"uom": "%",
						"min": 1,
						"max:": 100,
						"selections": [
							"%"
						]
					},
					{
						"heading": "Left Side Color",
						"type": "color",
						"attribute": "leftColor",
						"value": "#fbe4c4ff"
					},
					{
						"heading": "Right Side Color",
						"type": "color",
						"attribute": "rightColor",
						"value": "#b8e1e7ff"
					},
					{
						"heading": "Column Gap Width",
						"type": "slider",
						"attribute": "gap",
						"value": 2,
						"uom": "rem",
						"min": 0,
						"max:": 100,
						"selections": [
							"%",
							"px",
							"rem",
							"em"
						]
					},
					{
						"heading": "Column Gap Line Width",
						"type": "slider",
						"attribute": "gapLineWidth",
						"value": 2,
						"uom": "px",
						"min": 0,
						"max:": 100,
						"selections": [
							"%",
							"px",
							"rem",
							"em"
						]
					},
					{
						"heading": "Column Gap Line Color",
						"type": "color",
						"attribute": "gapLineColor",
						"value": "#394f87ff"
					},
					{
						"heading": "Column Padding",
						"type": "slider",
						"attribute": "columnPadding",
						"value": 1,
						"uom": "rem",
						"min": 0,
						"max:": 100,
						"selections": [
							"px",
							"rem",
							"em"
						]
					},
					{
						"heading": "Section Height",
						"type": "select",
						"attribute": "minHeight",
						"value": "100%",
						"selections": [{
								"label": "Full Height",
								"value": "100%"
							},
							{
								"label": "Fit Content",
								"value": "unset"
							}
						]
					},
					{
						"heading": "Bottom Margin",
						"type": "slider",
						"attribute": "bottomMargin",
						"value": 1,
						"uom": "rem",
						"min": 0,
						"max:": 100,
						"selections": [
							"%",
							"px",
							"rem",
							"em"
						]
					}
				]
			}]
		}
	]
}

function getConfigBasic() {
	return config;
}
export default getConfigBasic;