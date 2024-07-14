const ListFriendsInfo = ({ friend }) => {
    const { avatar, name } = friend;
    return (
        <li>
            <img src={avatar} alt="User avatar" />
            <p>{name}</p>
        </li>
    );
};

export default ListFriendsInfo;