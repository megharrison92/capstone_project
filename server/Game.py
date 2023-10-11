import pygame
from sys import exit

pygame.init()
Screen = pygame.display.set_mode((800, 400))
pygame.display.set_caption('Mystic Maeve and the stolen futures')
clock = pygame.time.Clock()
test_font = pygame.font.Font('graphics/Pixeltype.ttf', 50)

background_surface = pygame.image.load('graphics/background.png')
ground_surface = pygame.image.load('graphics/ground.png')
text_surface = test_font.render('Score', False, 'White')

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    Screen.blit(background_surface, (0,0))
    Screen.blit(ground_surface, (0,0))
    Screen.blit(text_surface, (300, 50))

    pygame.display.update()
    clock.tick(60)