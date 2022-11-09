import { Body, BackgroundImage, DirectoryItemContainer } from "./directory-item.styles";
import { Link } from "react-router-dom";
const DirectoryItem = ({category}) => {
    const { title, imageUrl} = category
    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
          <Body>
            <h2>{title}</h2>
            <Link to={`shop/${title}`}>
              <p>Shop Here</p>
            </Link>
            
          </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;