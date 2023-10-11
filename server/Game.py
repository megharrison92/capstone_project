import pygame
from sys import exit

pygame.init()
Screen = pygame.display.set_mode((800, 400))
pygame.display.set_caption('Mystic Maeve and the stolen futures')
clock = pygame.time.Clock()
test_font = pygame.font.Font('graphics/Pixeltype.ttf', 50)

background_surface = pygame.image.load('graphics/background.png').convert_alpha()
ground_surface = pygame.image.load('graphics/ground.png').convert_alpha()
text_surface = test_font.render('Score', False, 'White')

player_surface = pygame.image.load('graphics/player_walk_1.png').convert_alpha()


tarot_surface = pygame.image.load('graphics/tarot_1.png').convert_alpha()
tarot_x_position = 600


while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    Screen.blit(background_surface, (0,0))
    Screen.blit(ground_surface, (0,0))
    Screen.blit(text_surface, (300, 50))

    tarot_x_position -= 4
    if tarot_x_position < -100:
        tarot_x_position = 800
    Screen.blit(tarot_surface, (tarot_x_position, 250))

    Screen.blit(player_surface, (80, 225))

    pygame.display.update()
    clock.tick(60)