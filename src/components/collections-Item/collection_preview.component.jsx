import React, { Component } from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import data from '../../redux/shop/sliderItem.data';
import CollectionItem from './collection-item.component'


class collectionPreview extends Component {
    render() {
        return (
            <CarouselContailer>
                <Carousel
                    slidesPerPage={5}
                    clickToChange
                    infinite
                    centered
                    
                    keepDirectionWhenDragging
                    breakpoints={{
                        640: {
                          slidesPerPage: 2,
                          arrows: false
                        },
                        900: {
                          slidesPerPage: 4,
                          arrows: false
                        }
                      }}
                >
                    {data.map((i) => <CollectionItem key={i.id} item={i} />)}
                </Carousel>
            </CarouselContailer>

        );
    }
};

export default collectionPreview;

const CarouselContailer = styled(Carousel)`
    margin:0;
    `