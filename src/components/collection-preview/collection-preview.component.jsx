import React from 'react';
import styled from 'styled-components'
import CollectionItem from '../collection-item/collection-item.component'
import CollectionsItem from '../collections-Item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <Title >{title.toUpperCase()}</Title>
        <ItemsContainer>
            {
                items
                    .filter((item, idx) => idx < 5)
                    .map((item) => (
                        <CollectionsItem key={item.id} item={item} />
                    ))
            }
        </ItemsContainer>
        {/* <CollectionPreviewContainer>
            <Title >{title.toUpperCase()}</Title>
            <Preview>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }

            </Preview>
        </CollectionPreviewContainer> */}
    </CollectionPreviewContainer>
)

export default CollectionPreview;


const ItemsContainer = styled.div`
    width:100%;
    height:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 40px;
`
const Title = styled.div`
    font-size: 28px;
`
const Preview = styled.div`
        display: flex;
       justify-content: space-between;
`
