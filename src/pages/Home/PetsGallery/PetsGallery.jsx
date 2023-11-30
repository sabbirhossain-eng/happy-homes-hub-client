import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './styles.css'
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const PetsGallery = () => {
  const axiosPublic = useAxiosPublic();

  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await axiosPublic.get("/pets");
      return res.data;
    },
  });
  const postItem = items.filter( (item) => item.adopted === false && item );

  const sortedItems = postItem.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

    return (
        <div className="text-center flex-col items-center mt-10">
          <div>
            <h2 className="text-3xl font-medium text-[#f6ab4a] mb-4">Pets Gallery</h2>
          </div>
           <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
      className="items-center"
    >
      {sortedItems.map((item) => (
        <ImageListItem key={item._id} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.image, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        </div>
    );
};

export default PetsGallery;