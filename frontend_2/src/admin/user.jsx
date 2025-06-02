import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const User = () => {
  const [dataUser, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");

  const tampilData = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    tampilData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin menghapus data?",
      showCancelButton: true,
      confirmButtonText: "Yakin",
      denyButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:3000/api/users/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then(() => {
            tampilData();
          });
      }
    });
  };


  const filteredUsers = dataUser.filter((user) =>
    user.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-between mb-3">
              <a href="/admin/adduser" className="btn btn-primary">
                Tambah User
              </a>
              <input
                type="text"
                className="form-control w-50"
                placeholder="Cari nama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Hapus</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.nama}</td>
                      <td>{item.email}</td>
                      <td>
                        <a
                          href={`/admin/edituser/${item.id}`}
                          title="Edit"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </a>

                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(item.id)}
                          title="Hapus"
                        >
                          <i class="bi bi-trash3"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Data tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;