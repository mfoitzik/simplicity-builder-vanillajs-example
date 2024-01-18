const plainTextBlock = `<div data-sbblock="Plain  Text" data-sbzone="hovo" data-sbeditor="plaintext">Plain Text</div>`;
const twoColBlock = `<section class="twocol" data-sbblock="Two Column Section" data-sbsettings="5" data-sbzone="ho" data-parameters='{"leftWidth":"50%","leftColor":"#fbe4c4ff","rightColor":"#b8e1e7ff","gap":"2rem","gapLineWidth":"2px","gapLineColor":"#394f87ff","columnPadding":"1rem","minHeight":"100%","bottomMargin":"1rem"}' data-styleid="twocolumn-stylevars">
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
</style>`;

const config = {
  "helpUrl": "https://www.mifo.com/testhelp.html",
  "assetsLocation": "build/assets",
  "license": "BC7Fad790fcff3b62048fb2a2581c11e328fdaa7f6b77d465fda6bb1b4771ecdffd157bb718e903",
  "devKey":"3E1B33E2",
  "themeColor": "#ff0000",
  "themeDarkColor": "#bb00007",
"cleanupIds": ["tsid1","tsid2"],
"cleanupStrings": ["https://www.simplicityblocks.com/","https://www.mifo.com/"],
"cleanupAttributes": ["data-custom1","data-custom2"],
"blockSections": [
      {
          "heading": "Content EditorsXYZ123",
          "blocks": [
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/plaintext.png\" />",
                  "label": "Plain Text",
                  "tooltipHeading":"Plain Text Block",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/plaintext-sample.png",
                  "tooltipText":"Plain text editor that allows for text editing only. No HTML or formatting.",
                  "dragImage":"https://simplicityblocks.com/public/icons/plaintext-sample.png",
                  "html": encodeURIComponent(plainTextBlock)
              },
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/richtext.png\" />",
                  "label": "Rich Text",
                  "tooltipHeading":"Rich Text Block",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/richtext-sample.png",
                  "tooltipText":"The rich text editor allows for editing and formatting text, inserting images, linking, etc.",
                  "dragImage":"https://simplicityblocks.com/public/icons/richtext-sample.png",
                  "html":"<div data-sbblock=\"Rich  Text\" data-sbzone=\"hovo\" data-sbeditor=\"richtext\">Rich Text</div>"
              }
          ]
      },
      {
          "heading": "Headings",
          "blocks": [
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/h1.png\" />",
                  "label": "Heading",
                  "tooltipHeading":"HTML Heading",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/HeadingBlockImage.png",
                  "tooltipText":"An HTML heading that can be configured from H1 through H6. Defaults to H1.",
                  "dragImage":"https://simplicityblocks.com/public/icons/HeadingBlockImage.png",
                  "html":"<h1 data-sbblock=\"Heading\" data-sbzone=\"ho\" data-sbeditor=\"plaintext\" data-sbsettings=\"4\" data-heading=\"h1\">Heading Text</h1>"
              }
          ]
      },
      {
          "heading": "Inner Layouts",
          "blocks": [
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/2col.png\" />",
                  "label": "2-Col Layout",
                  "tooltipHeading":"Two Column Layout",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/TwoColumnBlockImage.png",
                  "tooltipText":"A responsive two-column layout. Can be used to fill an entire page or as a section of a page.",
                  "dragImage":"https://simplicityblocks.com/public/icons/TwoColumnBlockImage.png",
                  "html":encodeURIComponent(twoColBlock)
              }
          ]
      }

  ],
  "imageSelections" : [{"url":"https://www.mifo.com/testimages/image1.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image1_tn.jpg"},
      {"url":"https://www.mifo.com/testimages/image2.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image2_tn.jpg"},
      {"url":"https://www.mifo.com/testimages/image3.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image3_tn.jpg"},
      {"url":"https://www.mifo.com/testimages/image4.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image4_tn.jpg"}],
  "attributeEditors": [
      {
          "id": "1",
          "editorName": "atted",
          "editorHeading": "My Custom Editor 1",
          "mode": "constant",
          "callback": "testcallback",
          "controlSections": [
              {
                  "heading": "Section 1",
                  "type": "object",
                  "target": "data-testobj",
                  "controls": [
                      {
                          "heading": "My Text Selection",
                          "type": "text",
                          "mode": "textarea",
                          "attribute": "data-test1",
                          "value": "hi mike"
                      },
                      {
                          "heading": "My Toggle Switch",
                          "type": "toggle",
                          "attribute": "att2",
                          "mode": "bool",
                          "value": false
                      },
                      {
                          "heading": "My Image Selector xyz123456",
                          "type": "image",
                          "attribute": "att7",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ]
                      },
                      {
                          "heading": "My Slider",
                          "type": "slider",
                          "attribute": "data-test2",
                          "value": 0,
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
                          "heading": "My Select",
                          "type": "select",
                          "attribute": "att4",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ]
                      },
                      {
                          "heading": "My Check Set",
                          "type": "checkset",
                          "attribute": "att5",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low", "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#aa00bb"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ]
                      },
                      {
                          "heading": "My Color Picker",
                          "type": "color",
                          "attribute": "att6",
                          "value": "#dd2255ee"
                      }
                  ]
              },
              {
                  "heading": "Section 2",
                  "type": "single",
                  "target": "",
                  "controls": [
                      {
                          "type": "text",
                          "value": "hi mike",
                          "selections": [],
                          "heading": "My Text Selection",
                          "attribute": "data-att1b"
                      },
                      {
                          "type": "toggle",
                          "selections": [],
                          "mode": "bool",
                          "value": false,
                          "heading": "My Toggle Switch",
                          "attribute": "att2b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector xyz",
                          "attribute": "att7b"
                      },
                      {
                          "type": "slider",
                          "value": 0,
                          "uom": "px",
                          "min": 0,
                          "max:": 100,
                          "selections": [
                              "%",
                              "px",
                              "rem",
                              "em"
                          ],
                          "heading": "My Slider",
                          "attribute": "data-att3b"
                      },
                      {
                          "type": "select",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ],
                          "heading": "My Select",
                          "attribute": "att4b"
                      },
                      {
                          "type": "checkset",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low",
                                  "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#0000ff"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ],
                          "heading": "My Check Set",
                          "attribute": "att5b"
                      },
                      {
                          "type": "color",
                          "value": "#dd2255ee",
                          "selections": [],
                          "heading": "My Color Picker",
                          "attribute": "att6b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image1xxxxxxx.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image1_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image2.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image2_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image3.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image3_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector",
                          "attribute": "att8b"
                      }
                  ]
              }
          ]
      },
      {
          "id": "2",
          "editorName": "atted",
          "editorHeading": "My Custom Editor 2",
          "mode": "constant",
          "callback": "testcallback",
          "controlSections": [
              {
                  "heading": "Headings",
                  "type": "single",
                  "target": "",
                  "controls": [
                      {
                          "heading": "Heading Type",
                          "type": "select",
                          "attribute": "data-heading",
                          "value": "",
                          "selections": [
                              {"label": "Heading 1", "value":"h1"},
                              {"label": "Heading 2", "value":"h2"},
                              {"label": "Heading 3", "value":"h3"},
                              {"label": "Heading 4", "value":"h4"},
              {"label": "Heading 5", "value":"h5"},
              {"label": "Heading 6", "value":"h6"}
                          ]
                      }
                  ]
              },
      {
                  "heading": "Section 1",
                  "type": "object",
                  "target": "data-testobj",
                  "controls": [
                      {
                          "heading": "My Text Selection",
                          "type": "text",
                          "mode": "textarea",
                          "attribute": "data-test1",
                          "value": "hi mike"
                      },
                      {
                          "heading": "My Toggle Switch",
                          "type": "toggle",
                          "attribute": "att2",
                          "mode": "bool",
                          "value": false
                      },
                      {
                          "heading": "My Image Selector xyz123456",
                          "type": "image",
                          "attribute": "att7",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ]
                      },
                      {
                          "heading": "My Slider",
                          "type": "slider",
                          "attribute": "data-test2",
                          "value": 0,
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
                          "heading": "My Select",
                          "type": "select",
                          "attribute": "att4",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ]
                      },
                      {
                          "heading": "My Check Set",
                          "type": "checkset",
                          "attribute": "att5",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low", "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#aa00bb"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ]
                      },
                      {
                          "heading": "My Color Picker",
                          "type": "color",
                          "attribute": "att6",
                          "value": "#dd2255ee"
                      }
                  ]
              },
              {
                  "heading": "Section 2",
                  "type": "single",
                  "target": "",
                  "controls": [
                      {
                          "type": "text",
                          "value": "hi mike",
                          "selections": [],
                          "heading": "My Text Selection",
                          "attribute": "data-att1b"
                      },
                      {
                          "type": "toggle",
                          "selections": [],
                          "mode": "bool",
                          "value": false,
                          "heading": "My Toggle Switch",
                          "attribute": "att2b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector xyz",
                          "attribute": "att7b"
                      },
                      {
                          "type": "slider",
                          "value": 0,
                          "uom": "px",
                          "min": 0,
                          "max:": 100,
                          "selections": [
                              "%",
                              "px",
                              "rem",
                              "em"
                          ],
                          "heading": "My Slider",
                          "attribute": "data-att3b"
                      },
                      {
                          "type": "select",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ],
                          "heading": "My Select",
                          "attribute": "att4b"
                      },
                      {
                          "type": "checkset",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low",
                                  "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#0000ff"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ],
                          "heading": "My Check Set",
                          "attribute": "att5b"
                      },
                      {
                          "type": "color",
                          "value": "#dd2255ee",
                          "selections": [],
                          "heading": "My Color Picker",
                          "attribute": "att6b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image1xxxxxxx.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image1_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image2.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image2_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image3.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image3_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector",
                          "attribute": "att8b"
                      }
                  ]
              }
          ]
      },
      {
          "id": "4",
          "editorName": "atted",
          "editorHeading": "Heading Type Selector",
          "mode": "constant",
          "callback": "changeElementType",
          "controlSections": [
              {
                  "heading": "Headings",
                  "type": "single",
                  "target": "",
                  "controls": [
                      {
                          "heading": "Heading Type",
                          "type": "select",
                          "attribute": "data-heading",
                          "value": "",
                          "selections": [
                              {"label": "Heading 1", "value":"h1"},
                              {"label": "Heading 2", "value":"h2"},
                              {"label": "Heading 3", "value":"h3"},
                              {"label": "Heading 4", "value":"h4"},
              {"label": "Heading 5", "value":"h5"},
              {"label": "Heading 6", "value":"h6"}
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "id": "5",
          "editorName": "twocolatts",
          "editorHeading": "Two Column Section Settings",
          "mode": "constant",
          "callback": "changeCssVariableValue",
          "controlSections": [
              {
                  "heading": "Settings",
                  "type": "object",
                  "target": "data-parameters",
                  "controls": [
                      {
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
            "selections": [
              {"label": "Full Height", "value":"100%"},
                              {"label": "Fit Content", "value":"unset"}
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
              }
          ]
      }
  ]
}
function getConfig() {
  return config;
}
export default getConfig;
