import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {

    return (
        <div className= 'collection-preview'>
            <h1 className= 'title'> {title.toUpperCase()} </h1>
            <div className= 'preview'> 
                {items
                    .filter((item, idx)=> idx < 4) // this function will filter howmany items are liste. Index less than 4 means index 0, 1, 2, 3 will be listed
                    .map((item) =>(
                        <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;