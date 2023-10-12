import pygame
from sys import exit

pygame.init()
Screen = pygame.display.set_mode((800, 400))
pygame.display.set_caption('Mystic Maeve and the stolen futures')
clock = pygame.time.Clock()
test_font = pygame.font.Font('graphics/Pixeltype.ttf', 50)

background_surface = pygame.image.load('graphics/background.png').convert_alpha()
ground_surface = pygame.image.load('graphics/ground.png').convert_alpha()

score_surface = test_font.render('Score', False, 'White')
score_container = score_surface.get_rect(center = (400, 50))

#player 
player_surface = pygame.image.load('graphics/player_walk_1.png').convert_alpha()
player_container = player_surface.get_rect( topleft = (80, 225))
player_gravity = 0

#obstacles
tarot_surface = pygame.image.load('graphics/tarot_1.png').convert_alpha()
tarot_container = player_surface.get_rect( bottomleft = (600, 360))



while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
    
    keys = pygame.key.get_pressed()
    if keys[pygame.K_SPACE]:
        print('jump')

    Screen.blit(background_surface, (0,0))
    Screen.blit(ground_surface, (0,0))
    Screen.blit(score_surface, score_container)

    #obstacles
    tarot_container.x -= 4
    if tarot_container.right <= 0:
        tarot_container.left = 800
    Screen.blit(tarot_surface, tarot_container)

    #player
    player_container.left +=  1
    player_gravity += 1
    player_container.y =+ player_gravity
    Screen.blit(player_surface, player_container)

    # player_container.colliderect(tarot_container)
    # if player_container.colliderect(tarot_container):
    #     print('collision')

    pygame.display.update()
    clock.tick(60)