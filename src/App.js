
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/User/Home';
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { useSelector } from 'react-redux';
import AdminDepartment from './Components/Admin/AdminDepartment';
import AddDepartment from './Components/Admin/AddDepartment';
import DoctorLogin from './Components/Doctor/DoctorLogin';
import AddDoctor from './Components/Admin/AddDoctor';
import AdminDoctor from './Components/Admin/AdminDoctor';
import Requests from './Components/Admin/Requests';
import DoctorHome from './Components/Doctor/DoctorHome';
import Schedule from './Components/Doctor/Schedule';
import Doctors from './Components/User/Doctors';
import BookingForm from './Components/User/BookingForm';
import CheckOutForm from './Components/User/CheckOutForm';
import BookingConfirmation from './Components/User/BookingConfirmation';
import AppointmentList from './Components/User/AppointmentList';
import ContactUsForm from './Components/User/ContactUsForm';
import AboutUs from './Components/User/AboutUs';
import AdminUsers from './Components/Admin/AdminUsers';
import EditDepartment from './Components/Admin/EditDepartment';
import EditDoctor from './Components/Admin/EditDoctor';
import Profile from './Components/User/Profile';
import AdminBlogs from './Components/Admin/AdminBlogs';
import AddBlogs from './Components/Admin/AddBlogs';
import Bookings from './Components/Admin/Bookings';
import EditBlog from './Components/Admin/EditBlog';
import Blogs from './Components/User/Blogs';
import BlogPage from './Components/User/BlogPage';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const is_staff = useSelector(state => state.auth.is_staff)

  const doc_authenticated = useSelector(state => state.doctorauth.isAuthenticated)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contactUs' element={<ContactUsForm />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogPage' element={isAuthenticated ? <BlogPage /> : <Login />} />
          <Route path='/doctorLogin' element={<DoctorLogin />} />
          <Route path='/doctors' element={isAuthenticated ? <Doctors /> : <Login />} />
          <Route path='/profile' element={isAuthenticated ? <Profile /> : <Login />} />
          <Route path='/bookingForm' element={isAuthenticated ? <BookingForm /> : <Login />} />
          <Route path='/checkoutForm' element={isAuthenticated ? <CheckOutForm /> : <Login />} />
          <Route path='/checkoutSuccess' element={isAuthenticated ? <BookingConfirmation /> : <Login />} />
          <Route path='/appointmentList' element={isAuthenticated ? <AppointmentList /> : <Login />} />
          <Route path='/adminDashboard' element={isAuthenticated && is_staff ? <AdminDashboard /> : <Login />} />
          <Route path='/adminDepartment' element={isAuthenticated && is_staff ? <AdminDepartment /> : <Login />} />
          <Route path='/adminUsers' element={isAuthenticated && is_staff ? <AdminUsers /> : <Login />} />
          <Route path='/adminDoctor' element={isAuthenticated && is_staff ? <AdminDoctor /> : <Login />} />
          <Route path='/addDepartment' element={isAuthenticated && is_staff ? <AddDepartment /> : <Login />} />
          <Route path='/editDepartment' element={isAuthenticated && is_staff ? <EditDepartment /> : <Login />} />
          <Route path='/adminBookings' element={isAuthenticated && is_staff ? <Bookings /> : <Login />} />
          <Route path='/adminBlogs' element={isAuthenticated && is_staff ? <AdminBlogs /> : <Login />} />
          <Route path='/addBlogs' element={isAuthenticated && is_staff ? <AddBlogs /> : <Login />} />
          <Route path='/editBlog' element={isAuthenticated && is_staff ? <EditBlog /> : <Login />} />
          <Route path='/addDoctor' element={isAuthenticated && is_staff ? <AddDoctor /> : <Login />} />
          <Route path='/editDoctor' element={isAuthenticated && is_staff ? <EditDoctor /> : <Login />} />
          <Route path='/requests' element={isAuthenticated && is_staff ? <Requests /> : <Login />} />
          <Route path='/doctorHome' element={doc_authenticated ? <DoctorHome /> : <Login />} />
          <Route path='/schedule' element={doc_authenticated ? <Schedule /> : <Login />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
