import ListFriendInfo from "./listFriendInfo";

const ListFriends = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend) => {
                return <ListFriendInfo friend={friend} key={friend.id} />;
            })}
        </ul>
    );
};

export default ListFriends;