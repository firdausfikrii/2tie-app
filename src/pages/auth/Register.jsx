import { useState } from "react";
import { loginAPI } from "../../services/loginAPI";
import AlertBox from "../../components/AlertBox";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
    password_confirm: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi password
    if (dataForm.password !== dataForm.password_confirm) {
      setError("Password dan konfirmasi password tidak sama");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await loginAPI.createUser({
        username: dataForm.username,
        password: dataForm.password,
        password_confirm: dataForm.password_confirm,
      });

      setSuccess("Registrasi berhasil!");

      // Reset form
      setDataForm({
        username: "",
        password: "",
        password_confirm: "",
      });

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.log(err.response?.data);

      setError(
        err.response?.data?.message ||
        JSON.stringify(err.response?.data) ||
        err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        {error && <AlertBox type="error">{error}</AlertBox>}

        {success && <AlertBox type="success">{success}</AlertBox>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={dataForm.username}
            onChange={handleChange}
            placeholder="Masukkan username"
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
          />

          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
          />

          <input
            type="password"
            name="password_confirm"
            value={dataForm.password_confirm}
            onChange={handleChange}
            placeholder="Konfirmasi password"
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-2xl"
          >
            {loading ? "Mohon Tunggu..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}