const memoTextarea = document.getElementById('memo-content');
        const saveBtn = document.getElementById('save-btn');

        // 로컬 스토리지에서 저장된 메모를 가져옵니다. 없으면 기본값은 빈 문자열입니다.
        const savedMemo = localStorage.getItem('memo') || '';

        // 페이지가 로드될 때, 로컬 스토리지에서 가져온 메모를 텍스트 영역에 표시합니다.
        memoTextarea.value = savedMemo;

        // 저장 버튼을 클릭했을 때 실행될 함수를 설정합니다.
        saveBtn.addEventListener('click', () => {
            // 텍스트 영역에서 사용자가 입력한 메모를 가져옵니다.
            const memoText = memoTextarea.value;
            // 가져온 메모를 로컬 스토리지에 저장합니다.
            localStorage.setItem('memo', memoText);
            // 사용자에게 메모 저장이 완료되었음을 알리는 경고창을 띄웁니다.
            alert('Memo saved successfully!');
        });