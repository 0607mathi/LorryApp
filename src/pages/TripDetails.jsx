import React, { useState, useEffect } from 'react';
import '../pages/css/Trip.css';
import NavBar from '../pages/NavBar.jsx';
import { useNavigate } from 'react-router-dom';

const TripDetails = () => {
  const navigate = useNavigate();

  // State for trip form data
  const [formData, setFormData] = useState({
    date: '',
    from: '',
    to: '',
    load: '',
    income: '',
    loading: '',
    unloading: ''
  });

  // State to hold multiple trip rows
  const [rows, setRows] = useState([]);

  // State for lorry info
  const [lorryInfo, setLorryInfo] = useState({
    lorryNumber: '',
    advance: '',
    driver1: '',
    driver2: ''
  });

  // States for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Calculate totals
  const totalIncome = rows.reduce((sum, row) => sum + Number(row.income), 0);
  const totalLoading = rows.reduce((sum, row) => sum + Number(row.loading), 0);
  const totalUnloading = rows.reduce((sum, row) => sum + Number(row.unloading), 0);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedRows = localStorage.getItem('tripRows');
    const savedLorry = localStorage.getItem('lorryInfo');

    if (savedRows) {
      setRows(JSON.parse(savedRows));
    }

    if (savedLorry) {
      setLorryInfo(JSON.parse(savedLorry));
    }
  }, []);

  // Handle trip form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle lorry info input changes
  const handleLorryChange = (e) => {
    setLorryInfo({ ...lorryInfo, [e.target.name]: e.target.value });
  };

  // Handle Add or Update action for trip rows
  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    let updatedRows;

    if (isEditing) {
      // Update existing row
      updatedRows = [...rows];
      updatedRows[editingIndex] = formData;
      setRows(updatedRows);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      // Add new row
      updatedRows = [...rows, formData];
      setRows(updatedRows);
    }

    // Save updated rows and lorry info to localStorage
    localStorage.setItem('tripRows', JSON.stringify(updatedRows));
    localStorage.setItem('lorryInfo', JSON.stringify(lorryInfo));

    // Reset form
    setFormData({
      date: '',
      from: '',
      to: '',
      load: '',
      income: '',
      loading: '',
      unloading: ''
    });
  };

  // Load row data into form for editing
  const handleEdit = (index) => {
    setFormData(rows[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  return (
    <div className='trip'>
      <NavBar />
      <div className="container">
        {/* Trip Form */}
        <div className="trip-details">
          <form onSubmit={handleAddOrUpdate}>
            <h3>Trip Details</h3>
            <div>
              <label htmlFor="lorryNumber">Lorry Number</label>
              <input
                type="text"
                name="lorryNumber"
                value={lorryInfo.lorryNumber}
                onChange={handleLorryChange}
              />

              <label htmlFor="advance">Advance</label>
              <input
                type="number"
                name="advance"
                value={lorryInfo.advance}
                onChange={handleLorryChange}
              />

              <label htmlFor="driver1">Driver 1</label>
              <input
                type="text"
                name="driver1"
                value={lorryInfo.driver1}
                onChange={handleLorryChange}
              />

              <label htmlFor="driver2">Driver 2</label>
              <input
                type="text"
                name="driver2"
                value={lorryInfo.driver2}
                onChange={handleLorryChange}
              />

              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                placeholder="Pickup Point"
                value={formData.from}
                onChange={handleChange}
              />

              <label htmlFor="to">To</label>
              <input
                type="text"
                name="to"
                placeholder="Drop Point"
                value={formData.to}
                onChange={handleChange}
              />

              <label htmlFor="load">Load</label>
              <input
                type="text"
                name="load"
                placeholder="Load"
                value={formData.load}
                onChange={handleChange}
              />

              <label htmlFor="income">Income</label>
              <input
                type="number"
                name="income"
                placeholder="Amount"
                value={formData.income}
                onChange={handleChange}
              />

              <label htmlFor="loading">Loading</label>
              <input
                type="number"
                name="loading"
                placeholder="Amount"
                value={formData.loading}
                onChange={handleChange}
              />

              <label htmlFor="unloading">Unloading</label>
              <input
                type="number"
                name="unloading"
                placeholder="Amount"
                value={formData.unloading}
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <span className="btns">
              <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
              <button type="button" onClick={() => navigate('/')}>Back</button>
            </span>
          </form>
        </div>

        {/* Lorry Info Table */}
        <div className="data">
          <table className="lorryinfo">
            <thead>
              <tr>
                <th colSpan="2">Lorry Number</th>
                <th colSpan="2">Advance</th>
                <th colSpan="2">Driver 1</th>
                <th colSpan="2">Driver 2</th>
              </tr>
              <tr>
                <td colSpan="2">{lorryInfo.lorryNumber}</td>
                <td colSpan="2">{lorryInfo.advance}</td>
                <td colSpan="2">{lorryInfo.driver1}</td>
                <td colSpan="2">{lorryInfo.driver2}</td>
              </tr>
            </thead>
          </table>

          {/* Trip Data Table */}
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Load</th>
                <th>Income</th>
                <th>Loading</th>
                <th>Unloading</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.date}</td>
                  <td>{row.from}</td>
                  <td>{row.to}</td>
                  <td>{row.load}</td>
                  <td>{row.income}</td>
                  <td>{row.loading}</td>
                  <td>{row.unloading}</td>
                  <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                </tr>
              ))}
              {/* Totals Row */}
              <tr>
                <td colSpan="4" style={{ fontWeight: 'bold' }}>Totals</td>
                <td></td>
                <td style={{ fontWeight: 'bold' }}>{totalIncome}</td>
                <td style={{ fontWeight: 'bold' }}>{totalLoading}</td>
                <td style={{ fontWeight: 'bold' }}>{totalUnloading}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
