import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Carousel } from '@sefailyasoz/react-carousel'
const MyApp = () => {

const CarouselData = [
  {
    headerText: null,
    subText: 'Sub Text One',
    image: 'src\assets\downslider1.jpg',
  },
  {
    headerText: 'Header Text Two',
    subText: null,
    image: 'https://picsum.photos/1200/800',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://picsum.photos/720/720',
  },
  {
    headerText: 'Header Text Four',
    subText: 'Sub Text Four',
    image: 'https://picsum.photos/1920/1080',
  },
  {
    headerText: 'Header Text Five',
    subText: 'Sub Text Five',
    image: 'https://picsum.photos/480/360',
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<KeyboardBackspaceIcon />}
              leftItem={<KeyboardArrowRightIcon />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default MyApp