from app import sumar

def test_sumar():
    assert sumar(1, 2) == 3
    assert sumar(-1, -1) == -2
    assert sumar(0, 0) == 0