import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'

const ShopPage =({collections}) => (
          <div className='shop-page' style={{padding:"25px"}}>
            <CollectionsOverview/>
          </div>
    );



export default ShopPage;