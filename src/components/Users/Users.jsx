import Paginator from '../common/Paginator/Paginator.jsx';
import User from './User';



const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {


    return <div>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            />

        <div>
            {
                users.map(u => <User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}
export default Users