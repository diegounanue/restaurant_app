import mealsImage from '../../../assets/meals.jpeg';
import HeaderCartButton from './Components/HeaderCartButton';
import './Header.scss';

export const Header = ({ onOpen }) => {
    return (
        <>
            <header className='header'>
                <h1> React Meals </h1>
                <HeaderCartButton onOpenCart={onOpen} />
            </header>
            <div className='image-container'>
                <img src={mealsImage} alt="react meals" />
            </div>
        </>
    );
}

export default Header;

