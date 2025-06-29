document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // タスクを追加する関数
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // li要素を作成
        const listItem = document.createElement('li');

        // タスク名を表示するspan要素を作成
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        // 削除ボタンを作成
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // li要素に各要素を追加
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // ul要素にli要素を追加
        taskList.appendChild(listItem);

        // 入力欄をクリア
        taskInput.value = '';
    };

    // 「追加」ボタンをクリックしたときの処理
    addButton.addEventListener('click', addTask);

    // Enterキーを押したときの処理
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
