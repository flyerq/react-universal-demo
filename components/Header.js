import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>主页</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>关于</a>
        </Link>
    </div>
);

export default Header;