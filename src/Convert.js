import React, { Component } from 'react';
import ReactExport from 'react-data-export';
import './App.css';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const multiDataSet = [
    {
        columns: [
            { title: "Name", width: { wpx: 80 } },//pixels width 
            { title: "WSU ID", width: { wch: 40 } },//char width 
            { title: "Email", width: { wpx: 90 } },
        ],
        data: [
            [
                { value: "H1" },
                { value: "Bold" },
                { value: "Red" },
            ],
            [
                { value: "H2", style: { font: { sz: "18", bold: true } } },
                { value: "underline", style: { font: { underline: true } } },
                { value: "Blue", style: { fill: { patternType: "solid", fgColor: { rgb: "FF0000FF" } } } },
            ],
            [
                { value: "H3", style: { font: { sz: "14", bold: true } } },
                { value: "italic", style: { font: { italic: true } } },
                { value: "Green", style: { fill: { patternType: "solid", fgColor: { rgb: "FF00FF00" } } } },
            ],
            [
                { value: "H4", style: { font: { sz: "12", bold: true } } },
                { value: "strike", style: { font: { strike: true } } },
                { value: "Orange", style: { fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } } } },
            ],
            [
                { value: "H5", style: { font: { sz: "10.5", bold: true } } },
                { value: "outline", style: { font: { outline: true } } },
                { value: "Yellow", style: { fill: { patternType: "solid", fgColor: { rgb: "FFFFFF00" } } } },
            ],
            [
                { value: "H6", style: { font: { sz: "7.5", bold: true } } },
                { value: "shadow", style: { font: { shadow: true } } },
                { value: "Light Blue", style: { fill: { patternType: "solid", fgColor: { rgb: "FFCCEEFF" } } } }
            ]
        ]
    }
];

class Convert extends Component {
    render() {
        return (
            <div>
                <ExcelFile element={<button>Download Data With Styles</button>}>
                    <ExcelSheet dataSet={multiDataSet} name="Organization" />
                </ExcelFile>
            </div>
        );
    }
}
export default Convert;