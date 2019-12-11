import React from 'react';
import {connect} from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectCollections} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from'reselect'


const ShopPage =({collections}) => (
          <div className='shop-page' style={{padding:"25px"}}>
            {collections.map(({ id, ...otherCollectionProps }) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
          </div>
    );


const mapStateToProps=createStructuredSelector({
  collections:selectCollections
})

export default connect(mapStateToProps)(ShopPage);