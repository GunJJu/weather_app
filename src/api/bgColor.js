// weatherId: OpenWeather 코드 (예: 500, 801, 611, 800 등)
export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return '#FCD34D'; // 맑음: 따뜻한 노랑(amber-300)

    const group = Math.floor(weatherId / 100); // 2,3,5,6,7,8...

    switch (group) {
        case 2: // 뇌우: 어두운 하늘 + 인디고 번쩍
            return 'linear-gradient(135deg, #1c375dff 0%, #5953cdff 100%)';
        case 3: // 이슬비: 옅은 청록 → 연한 하늘
            return 'linear-gradient(135deg, #CFFAFE 0%, #93C5FD 100%)';
        case 5: // 비: 블루 톤 딥 → 라이트
            return 'linear-gradient(135deg, #98b8ffff 0%, #60A5FA 100%)';
        case 6: // 눈: 화이트에 살짝 아이스블루
            return 'linear-gradient(135deg, #FFFFFF 0%, #fafee0ff 100%)';
        case 7: // 안개/먼지: 소프트 그레이 → 블루그레이
            return 'linear-gradient(135deg, #CBD5E1 0%, #cce1fdff 100%)';
        case 8: // 구름: 라이트 슬레이트 → 미드 슬레이트
            return 'linear-gradient(135deg, #f5f9ffff 0%, #c3c3c3ff 100%)';
        default: // 예외
            return 'linear-gradient(135deg, #CBD5E1 0%, #64748B 100%)';
    }
};
