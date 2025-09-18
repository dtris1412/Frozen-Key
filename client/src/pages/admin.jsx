import React, { useState } from "react";
import "../styles/admin.css";

const AdminDashboard = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "📊" },
    { id: "users", name: "Users", icon: "👥" },
    { id: "products", name: "Products", icon: "🎮" },
    { id: "orders", name: "Orders", icon: "📦" },
    { id: "payments", name: "Payments", icon: "💳" },
    { id: "vouchers", name: "Vouchers", icon: "🎫" },
    { id: "reports", name: "Reports", icon: "📈" },
  ];

  const stats = [
    {
      title: "Tổng doanh thu",
      value: "15,234,000,000 VNĐ",
      change: "+12%",
      icon: "💰",
    },
    { title: "Đơn hàng hôm nay", value: "847", change: "+5%", icon: "📦" },
    { title: "Người dùng mới", value: "1,234", change: "+8%", icon: "👥" },
    { title: "Sản phẩm bán chạy", value: "156", change: "+15%", icon: "🔥" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersContent />;
      case "products":
        return <ProductsContent />;
      case "orders":
        return <OrdersContent />;
      case "payments":
        return <PaymentsContent />;
      case "vouchers":
        return <VouchersContent />;
      case "reports":
        return <ReportsContent />;
      default:
        return <DashboardContent stats={stats} />;
    }
  };

  return (
    <div className="admin-container">
      <div className={`admin-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="admin-logo">
            <span className="logo-icon">❄️</span>
            {!sidebarCollapsed && (
              <span className="logo-text">FrozenKey Admin</span>
            )}
          </div>
          <button
            className="collapse-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? "→" : "←"}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {!sidebarCollapsed && (
                <span className="nav-text">{item.name}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={() => setCurrentPage("home")}>
            <span className="nav-icon">🚪</span>
            {!sidebarCollapsed && <span className="nav-text">Thoát Admin</span>}
          </button>
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h1>{menuItems.find((item) => item.id === activeTab)?.name}</h1>
          <div className="header-actions">
            <span className="admin-user">👤 Admin</span>
          </div>
        </div>

        <div className="admin-content">{renderContent()}</div>
      </div>
    </div>
  );
};

// Dashboard Content Component
const DashboardContent = ({ stats }) => (
  <div className="dashboard-content">
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-details">
            <h3>{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-change positive">{stat.change}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="dashboard-charts">
      <div className="chart-card">
        <h3>Doanh thu theo tháng</h3>
        <div className="chart-placeholder">📊 Biểu đồ doanh thu</div>
      </div>
      <div className="chart-card">
        <h3>Sản phẩm bán chạy</h3>
        <div className="chart-placeholder">🏆 Top sản phẩm</div>
      </div>
    </div>
  </div>
);

// Users Content Component
const UsersContent = () => (
  <div className="users-content">
    <div className="content-header">
      <h2>Quản lý người dùng</h2>
      <button className="add-btn">+ Thêm người dùng</button>
    </div>
    <div className="users-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Ngày tạo</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>Nguyễn Văn A</td>
            <td>user@example.com</td>
            <td>2024/01/15</td>
            <td>
              <span className="status active">Hoạt động</span>
            </td>
            <td>
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// Products Content Component
const ProductsContent = () => (
  <div className="products-content">
    <div className="content-header">
      <h2>Quản lý sản phẩm</h2>
      <button className="add-btn">+ Thêm sản phẩm</button>
    </div>
    <div className="products-grid">
      <div className="product-admin-card">
        <img
          src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
          alt="Game"
        />
        <h4>Cyberpunk 2077</h4>
        <p>1,200,000 VNĐ</p>
        <div className="product-actions">
          <button className="edit-btn">✏️</button>
          <button className="delete-btn">🗑️</button>
        </div>
      </div>
    </div>
  </div>
);

// Orders Content Component
const OrdersContent = () => (
  <div className="orders-content">
    <div className="content-header">
      <h2>Quản lý đơn hàng</h2>
    </div>
    <div className="orders-table">
      <table>
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Khách hàng</th>
            <th>Sản phẩm</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#DH001</td>
            <td>Nguyễn Văn A</td>
            <td>Cyberpunk 2077</td>
            <td>1,200,000 VNĐ</td>
            <td>
              <span className="status completed">Hoàn thành</span>
            </td>
            <td>
              <button className="view-btn">👁️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// Payments Content Component
const PaymentsContent = () => (
  <div className="payments-content">
    <div className="content-header">
      <h2>Quản lý thanh toán</h2>
    </div>
    <div className="payment-stats">
      <div className="stat-card">
        <h3>Tổng thu nhập</h3>
        <div className="amount">15,234,000,000 VNĐ</div>
      </div>
      <div className="stat-card">
        <h3>Giao dịch hôm nay</h3>
        <div className="amount">847</div>
      </div>
    </div>
  </div>
);

// Vouchers Content Component
const VouchersContent = () => (
  <div className="vouchers-content">
    <div className="content-header">
      <h2>Quản lý voucher</h2>
      <button className="add-btn">+ Tạo voucher</button>
    </div>
    <div className="vouchers-list">
      <div className="voucher-card">
        <div className="voucher-info">
          <h4>FROZEN20</h4>
          <p>Giảm 20% - Áp dụng cho tất cả sản phẩm</p>
          <span className="voucher-expiry">Hết hạn: 31/12/2024</span>
        </div>
        <div className="voucher-actions">
          <button className="edit-btn">✏️</button>
          <button className="delete-btn">🗑️</button>
        </div>
      </div>
    </div>
  </div>
);

// Reports Content Component
const ReportsContent = () => (
  <div className="reports-content">
    <div className="content-header">
      <h2>Báo cáo thống kê</h2>
    </div>
    <div className="reports-grid">
      <div className="report-card">
        <h3>📈 Doanh thu</h3>
        <div className="report-chart">Biểu đồ doanh thu theo thời gian</div>
      </div>
      <div className="report-card">
        <h3>🏆 Sản phẩm bán chạy</h3>
        <div className="report-list">
          <div className="report-item">1. Cyberpunk 2077</div>
          <div className="report-item">2. Elden Ring</div>
          <div className="report-item">3. God of War</div>
        </div>
      </div>
      <div className="report-card">
        <h3>🎫 Voucher sử dụng</h3>
        <div className="report-stats">
          <p>FROZEN20: 150 lượt sử dụng</p>
          <p>NEWUSER: 89 lượt sử dụng</p>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
