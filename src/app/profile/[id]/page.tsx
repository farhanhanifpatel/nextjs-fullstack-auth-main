export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <h1 className="text-4xl font-semibold text-gray-700 mb-4">User Profile</h1>
                <hr className="border-gray-300 my-4" />

                <p className="text-lg text-gray-600 mb-2">Profile Page for User ID:</p>

                <div className="flex justify-center items-center">
                    <span className="text-2xl font-bold text-white p-4 rounded-full bg-orange-500">
                        {params.id}
                    </span>
                </div>

                <div className="mt-6">
                    <p className="text-center text-gray-500">
                        Welcome to the profile page of the user with ID{' '}
                        <span className="font-semibold">{params.id}</span>. Explore more information about
                        this user here.
                    </p>
                </div>
            </div>
        </div>
    )
}
