//alert("欢迎使用波塞冬之眼\nQQ群聊：878952969");
//setWindowDrag(0, 0, 377, 70);
//setWindowRect(150, 40, 377, 300);
window.Query  = true;
// 创建公告弹窗函数
function createAnnouncement() {
    // 创建弹窗容器
    const modal = document.createElement('div');
    modal.id = 'announcement-modal';
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 377px;
        height: 300px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        overflow: hidden;
        animation: slideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    `;
    
    // 创建内部内容容器
    const content = document.createElement('div');
    content.style.cssText = `
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 10px;
        margin: 1px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    `;
    
    // 创建标题
    const title = document.createElement('div');
    title.style.cssText = `
        color: #4f46e5;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
    `;
    title.innerHTML = '公告';
    
    // 创建日期
    const date = document.createElement('div');
    date.style.cssText = `
        color: #6b7280;
        font-size: 12px;
        text-align: center;
        margin-bottom: 10px;
        padding-bottom: 8px;
        border-bottom: 1px solid #e5e7eb;
    `;
    date.textContent = '6月17日公告';
    
    // 创建内容区域
    const messageContainer = document.createElement('div');
    messageContainer.style.cssText = `
        flex: 1;
        overflow-y: auto;
        margin-bottom: 10px;
    `;
    
    // 创建消息内容
    const messages = [
        {text: '• 必须更新至v2.2版本', color: '#ef4444'} ,
        {text: '• 新功能采用云更新方式', color: '#3b82f6'},
        {text: '• 新增娱乐替换功能', color: '#10b981'} , 
        {text: '• 修复娱乐界面时装替换', color: '#7e07fa'},
        {text: '• 修复UI主题不记录状态', color: '#fe078c'}
    ];
    
    messages.forEach(msg => {
        const message = document.createElement('div');
        message.style.cssText = `
            font-size: 12px;
            line-height: 1.4;
            margin-bottom: 6px;
            padding: 4px 6px;
            background: #f9fafb;
            border-radius: 6px;
            border-left: 3px solid ${msg.color};
        `;
        message.textContent = msg.text;
        messageContainer.appendChild(message);
    });
    
    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        display: flex;
        gap: 8px;
        margin-top: auto;
    `;
    
    // 创建"我知道了"按钮
    const confirmBtn = document.createElement('button');
    confirmBtn.style.cssText = `
        flex: 1;
        padding: 6px 0;
        background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    `;
    confirmBtn.innerHTML = '我知道了';
    confirmBtn.onmouseenter = () => {
        confirmBtn.style.transform = 'translateY(-1px)';
        confirmBtn.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.3)';
    };
    confirmBtn.onmouseleave = () => {
        confirmBtn.style.transform = 'translateY(0)';
        confirmBtn.style.boxShadow = 'none';
    };
    confirmBtn.onclick = () => {
        modal.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(modal);
            // 在实际使用中，这里可以触发回调或存储状态
           
        }, 300);
    };
    
    // 创建"不再提示"按钮
    const dismissBtn = document.createElement('button');
    dismissBtn.style.cssText = `
        flex: 1;
        padding: 6px 0;
        background: white;
        color: #6b7280;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    `;
    dismissBtn.innerHTML = '不再提示';
    dismissBtn.onmouseenter = () => {
        dismissBtn.style.background = '#f9fafb';
        dismissBtn.style.transform = 'translateY(-1px)';
    };
    dismissBtn.onmouseleave = () => {
        dismissBtn.style.background = 'white';
        dismissBtn.style.transform = 'translateY(0)';
    };
    dismissBtn.onclick = () => {
        modal.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(modal);
            // 在实际使用中，这里可以设置cookie或localStorage
            console.log('用户选择不再提示公告');
            // 示例：
localStorage.setItem('announcement_dismissed5', 'true');
        }, 300);
    };
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.9);
            }
        }
        
        #announcement-modal::-webkit-scrollbar {
            width: 4px;
        }
        
        #announcement-modal::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 2px;
        }
        
        #announcement-modal::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 2px;
        }
        
        #announcement-modal::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
        }
        
        button:active {
            transform: scale(0.98);
        }
    `;
    
    // 组装元素
    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(dismissBtn);
    
    content.appendChild(title);
    content.appendChild(date);
    content.appendChild(messageContainer);
    content.appendChild(buttonContainer);
    
    modal.appendChild(style);
    modal.appendChild(content);
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 添加ESC键关闭功能
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            modal.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (modal.parentNode) {
                    document.body.removeChild(modal);
                }
                document.removeEventListener('keydown', handleKeyDown);
            }, 300);
        }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    // 点击外部关闭功能
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (modal.parentNode) {
                    document.body.removeChild(modal);
                }
            }, 300);
        }
    });
}

// 自动创建弹窗（在实际使用中，您可以根据条件调用此函数）
//createAnnouncement();

// 如果值不是"true"，就创建公告
if (localStorage.getItem('announcement_dismissed5') !== 'true') {
    createAnnouncement();
}


// 如果需要手动触发，可以暴露函数到全局
window.showAnnouncement = createAnnouncement;


