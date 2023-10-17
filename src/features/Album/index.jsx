import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Zing Zing Zigat (Single)',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/06/14/d/d/2/3/1655143494214.jpg',
        },
        {
            id: 2,
            name: 'Tum Tum (Dj Mp4 & Anrok Remix) (Single)',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2018/12/20/d/0/8/e/1545284111054.jpg',
        },
        {
            id: 3,
            name: 'Ik Zing En Dans (Single)',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/05/26/9/5/7/a/1653557281004.jpg',
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;