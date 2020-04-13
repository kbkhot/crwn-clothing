import React from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }

    }

    render () {
        const {collections}=this.state; // this is nothing but destructing the collections property off the state in a variable called collections
        return (
            <div className= 'shop-page'>
                {collections.map(({id, ...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
                
            </div>
        );
    }
}

export default ShopPage;