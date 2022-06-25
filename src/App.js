import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getImages } from './actions/images';

function App() {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
  }, []);
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images && images.images && images.images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default App;
