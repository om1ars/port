import React from 'react'
import './Gallery.css'

export default function Gallery() {
    return (
        <div>
                <GridContainer className="grid-container">
                <Grid className="grid">
                    <GridLayer className="gridLayer">
                        <GridBlock1 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock2 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock3 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer centerPiece">
                        <GridBlock4 className="gridBlock centerBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock5 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock6 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock7 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock8 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock9 className="gridBlock"/>
                    </GridLayer>
                </Grid>
            </GridContainer>
        </div>
    )
}
